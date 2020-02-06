import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import addJournalEventListener from "./journalAddEvents.js";
import journalAddFilter from "./journalAddFilter.js";
import journalEvents from "./journalEvents.js";



API.getJournalEntries().then(renderJournalEntries);
addJournalEventListener();
journalAddFilter.journalFilterFunction()
journalAddFilter.showEntriesFunction()
journalEvents.journalEvents();






