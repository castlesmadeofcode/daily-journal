import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const journalDate = document.getElementById("journalDate");
const journalConcepts = document.getElementById("journalConcepts");
const journalEntry = document.getElementById("journalEntry");
const journalMood = document.getElementById("journalMood");


API.getJournalEntries().then(renderJournalEntries);


const captureUserInfo = () => {
    API.saveJournalEntry();
}

document.getElementById("journalRecordEntry").addEventListener("click", captureUserInfo);

