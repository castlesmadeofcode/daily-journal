

import makeJournal from "./entryComponent.js"


const API = {
    getJournalEntries() {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json())

    },
    saveJournalEntry() {
        const newJournalEntry = makeJournal.makeJournalEntryObject(journalDate.value, journalConcepts.value, journalEntry.value, journalMood.value)
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
            window.alert("fill out all the things!")
        }
    }
}







export default API
