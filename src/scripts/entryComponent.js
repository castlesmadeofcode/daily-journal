

const makeJournal = {


makeJournalEntryComponent (journalEntry) {
        return `
        <ul>
        <li>Date: ${journalEntry.date}</li>
        <li>Concept: ${journalEntry.concept}</li>
        <li>Entry: ${journalEntry.entry}</li>
        <li>Mood: ${journalEntry.mood}</li>
        <ul>
    `
},
makeJournalEntryObject(date, concept, entry, mood) { 
    return ({
    "date": date,
    "concept": concept,
    "entry": entry,
    "mood": mood
})
}
};




export default makeJournal