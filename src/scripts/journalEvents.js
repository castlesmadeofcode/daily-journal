import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const journalList = document.querySelector(".entryLog")
const entryContainer = document.querySelector(".entryLog");
const hiddenJournalId = document.querySelector("#journalId")



const updateFormFields = entryId => {

    fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json())
        .then(entry => {

            hiddenJournalId.value = entry.id;
            journalDate.value = entry.date;
            journalConcepts.value = entry.concept;
            journalEntry.value = entry.entry;
            journalMood.value = entry.mood;

        })
}

export default {
    journalEvents: () => {
        journalList.addEventListener("click", (event) => {

            //starts with is a built in method
            if (event.target.id.startsWith("deleteEntry--")) {
                //split returns an arrray, id is located at index 1
                // unique id matches id of object in json that we want to delete
                const deleteBtnId = event.target.id.split("--")[1];

                entryContainer.textContent = ""

                API.deleteEntry(deleteBtnId)
                    .then(API.getJournalEntries)
                    .then(renderJournalEntries);

            }
            else if (event.target.id.startsWith("editEntry--")) {
                const entryToEdit = event.target.id.split("--")[1];

                updateFormFields(entryToEdit)

            }

        })
    }
}
