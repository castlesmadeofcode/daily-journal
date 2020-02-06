import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import makeJournal from "./entryComponent.js"



const journalDate = document.getElementById("journalDate");
const journalConcepts = document.getElementById("journalConcepts");
const journalEntry = document.getElementById("journalEntry");
const journalMood = document.getElementById("journalMood");
const entryContainer = document.querySelector(".entryLog");
const hiddenJournalId = document.querySelector("#journalId")


const clearForm = () => {
  
    hiddenJournalId.value = "";
    journalDate.value = "";
    journalConcepts.value = "";
    journalEntry.value = "";
    journalMood.value = "";
  }


const addJournalEventListener = () => {
    const saveEntry = document.getElementById("journalRecordEntry");

    saveEntry.addEventListener("click", () => {
        const newJournalEntry = makeJournal.makeJournalEntryObject(journalDate.value, journalConcepts.value, journalEntry.value, journalMood.value)

        if (hiddenJournalId.value !== "") {
            newJournalEntry.id = parseInt(hiddenJournalId.value);

            entryContainer.textContent = ""

            API.updateJournalEntry(newJournalEntry)
              .then(() => {
                
                API.getJournalEntries()
                .then(renderJournalEntries)
                .then(clearForm);

              })
            }

        else if (journalDate.value !== "" && journalConcepts.value !== ""
            && journalEntry.value !== "" && journalMood.value !== "") {

            entryContainer.textContent = ""

            API.saveJournalEntry(newJournalEntry)
                .then(API.getJournalEntries)
                .then(renderJournalEntries)
                .then(clearForm);

        }
        else {
            window.alert("fill out all the things!")
        }
    })
}

export default addJournalEventListener


