import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const journalList = document.querySelector(".entryLog")
const entryContainer = document.querySelector(".entryLog");


export default {
    journalDeleteEvent: () => {
        journalList.addEventListener("click", (event) => {

            //starts with is a built in method
            if (event.target.id.startsWith("deleteEntry--")) {
                //split returns an arrray, id is located at index 1
                // unique id matches id of object in json that we want to delete
                const deleteBtnId = event.target.id.split("--")[1];

                entryContainer.textContent = ""

                API.deleteEntry(deleteBtnId)
                    .then(API.getJournalEntries)
                    .then(renderJournalEntries);

            }
        })
    }
}
