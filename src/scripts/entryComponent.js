
const makeJournalEntryComponent = (journalEntry) => {
        return `
        <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Concept: ${journalEntry.concept}</li>
        <li>Entry: ${journalEntry.entry}</li>
        <li>Mood: ${journalEntry.mood}</li>
        <ul>
    `
};




export default makeJournalEntryComponent