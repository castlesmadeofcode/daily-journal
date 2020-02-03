import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import makeJournalEntryObject from "./data.js"

API.getJournalEntries().then(renderJournalEntries);


const captureUserInfo = () => {

    const journalDate = document.getElementById("journalDate");
    const journalConcepts = document.getElementById("journalConcepts");
    const journalEntry = document.getElementById("journalEntry");
    const journalMood = document.getElementById("journalMood");


    API.saveJournalEntry(makeJournalEntryObject);


}
document.getElementById("journalRecordEntry").addEventListener("click", captureUserInfo);

