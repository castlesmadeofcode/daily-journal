

const baseUrl = "http://localhost:8088"

const API = {
    getJournalEntries() {
        return fetch(`${baseUrl}/entries`)
            .then(response => response.json())

    },
    saveJournalEntry(newJournalEntry) {
        return fetch(`${baseUrl}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
    },
    updateJournalEntry(entry) {
        return fetch(`${baseUrl}/entries/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        });
    },
    deleteEntry(entryId) {
        console.log(entryId);
        return fetch(`${baseUrl}/entries/${entryId}`, {
            method: "DELETE"
        })
    }
}





export default API
