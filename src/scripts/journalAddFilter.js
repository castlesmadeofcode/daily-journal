import API from "./data.js"
import makeJournal from "./entryComponent.js"
import renderJournalEntries from "./entriesDOM.js"

const entryContainer = document.querySelector(".entryLog");
let radioButtonByName = document.getElementsByName("mood");
const showEntries = document.getElementById("showAllEntries");


// show all journal entries button
showEntries.addEventListener("click", () => {
        entryContainer.textContent = ""
        API.getJournalEntries()
        .then(renderJournalEntries);
})


//filter by radio button
radioButtonByName.forEach(button => {
    button.addEventListener("click", () => {
        let moodValue = button.value;
        console.log(moodValue);

        API.getJournalEntries()
        .then( function (entries) {
            let filteredEntries = entries.filter(entry => entry.mood === moodValue);
            entryContainer.textContent = ""
            filteredEntries.forEach(entry => {
            entryContainer.innerHTML += makeJournal.makeJournalEntryComponent(entry);
              
            });
        });
    })
    
});