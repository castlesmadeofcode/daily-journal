import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"
import addJournalEventListener from "./journalAddEvents.js";

addJournalEventListener();



API.getJournalEntries().then(renderJournalEntries);

