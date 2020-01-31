



const makeJournalEntryObject = (date, concept, entry, mood) => ({
    "date": date,
    "concept": concept,
    "entry": entry,
    "mood": mood
});

const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())

    },
    saveJournalEntry() {
        const newJournalEntry = makeJournalEntryObject(journalDate.value, journalConcepts.value, journalEntry.value, journalMood.value)
       console.log(newJournalEntry)
       if (journalDate.value !== "" && journalConcepts.value !== ""
       && journalEntry.value !== "" && journalMood.value !== "") {
        fetch("http://localhost:8088/entries", { // Replace "url" with your API's URL
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
  location.reload();

}
else {
    window.alert("fill out all the things")
}
}
}







export default API
