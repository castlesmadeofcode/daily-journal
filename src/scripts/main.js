const fetchEntries = fetch("http://localhost:8088/entries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedEntries => {
        renderJournalEntries(parsedEntries);
    })



const entryContainer = document.querySelector(".entryLog");

const makeJournalEntryComponent = (journalEntry) => {

    return `
        <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Concept: ${journalEntry.concept}</li>
        <li>Entry: ${journalEntry.entry}</li>
        <li>Mood: ${journalEntry.mood}</li>
        <ul>
    `
}

const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
    entryContainer.innerHTML += makeJournalEntryComponent(entry);

})
};

