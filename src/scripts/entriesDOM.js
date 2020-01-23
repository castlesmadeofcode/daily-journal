
const entryContainer = document.querySelector(".entryLog");

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        entryContainer.innerHTML += makeJournalEntryComponent(entry);

    })
};