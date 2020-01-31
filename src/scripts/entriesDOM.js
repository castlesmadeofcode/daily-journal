
import makeJournalEntryComponent from "./entryComponent.js"

const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        entryContainer.innerHTML += makeJournalEntryComponent(entry);

    })
};


export default renderJournalEntries