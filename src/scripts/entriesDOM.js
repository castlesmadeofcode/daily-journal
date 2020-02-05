
import makeJournal from "./entryComponent.js"

const entryContainer = document.querySelector(".entryLog");


const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        entryContainer.innerHTML += makeJournal.makeJournalEntryComponent(entry);

    })
};


export default renderJournalEntries