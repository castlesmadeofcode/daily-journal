import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

const entryContainer = document.querySelector(".entryLog");
let radioButtonByName = document.getElementsByName("mood");
const showEntries = document.getElementById("showAllEntries");
const searchEntries = document.getElementById("searchEntries");

export default {
    // show all journal entries button
    showEntriesFunction: () => showEntries.addEventListener("click", () => {
        entryContainer.textContent = ""
        API.getJournalEntries()
            .then(renderJournalEntries);
    }),

    //filter by radio button
    journalFilterFunction: () => radioButtonByName.forEach(button => {
        button.addEventListener("click", () => {
            let moodValue = button.value;
            API.getJournalEntries()
                .then(entries => {
                    // console.log(entries)
                    let filteredEntries = entries.filter(entry => entry.mood === moodValue);
                    entryContainer.textContent = ""
                    // console.log(filteredEntries);
                    renderJournalEntries(filteredEntries);
                });
        })
    }),

    searchEntriesFunction: () => searchEntries.addEventListener("keyup", event => {
        if (event.key === "Enter") {
            let searchValue = searchEntries.value.toLowerCase();
            API.getJournalEntries()
                .then(entries => {
                    let filteredSearches = entries.filter(entries => 
                     entries.date.toLowerCase().includes(`${searchValue}`) ||
                     entries.concept.toLowerCase().includes(`${searchValue}`) ||
                     entries.entry.toLowerCase().includes(`${searchValue}`) ||
                     entries.mood.toLowerCase().includes(`${searchValue}`));

                     entryContainer.textContent = ""
                    
                    renderJournalEntries(filteredSearches);
                    // console.log(filteredSearches)
                })
            }
        })
    }



// searchEntriesFunction: () => searchEntries.addEventListener("keyup", () => {
//     let searchEntriesValue = searchEntries.value;
//     API.getJournalEntries()
//         .then(entries => {
//             entries.forEach(entry => {

//                 for (const keysNVals of Object.entries(entry)) {

//                     // console.log(keysNVals)

//                     let filterKeysNVals =
//                     // keysNVals.filter(res => console.log(`"${res}"`.toLowerCase()))

//                         keysNVals.filter(res => `"${res}"`.toLowerCase().includes(searchEntriesValue.toLowerCase()))


//                         // if (filterKeysNVals !== []) {
//                         console.log(filterKeysNVals);


//                     // renderJournalEntries(filterKeysNVals);
//                         // }


//                 }
//             })
//         })
// })