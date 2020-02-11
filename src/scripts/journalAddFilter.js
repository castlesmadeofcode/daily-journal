import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const entryContainer = document.querySelector(".entryLog");
let radioButtonByName = document.getElementsByName("mood");
const showEntries = document.getElementById("showAllEntries");

export default {
    // show all journal entries button
    showEntriesFunction: () => showEntries.addEventListener("click", () => {
        entryContainer.textContent = ""
        API.getJournalEntries()
            .then(renderJournalEntries);
    }),

    //filter by radio button
    journalFilterFunction: () => radioButtonByName.forEach(button => {
        button.addEventListener("click", () => {
            let moodValue = button.value;
            API.getJournalEntries()
                .then(entries => {
                    let filteredEntries = entries.filter(entry => entry.mood === moodValue);
                    entryContainer.textContent = ""
                    renderJournalEntries(filteredEntries);
                });
        })
    })
}
