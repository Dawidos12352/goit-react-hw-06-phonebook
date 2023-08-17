import { combineReducers } from "redux";

if (!localStorage.getItem("contacts")) {
    localStorage.setItem("contacts", JSON.stringify([]));
};

const contactsLocalStorage = localStorage.getItem("contacts");
const contactsLocalStorageParsed = JSON.parse(contactsLocalStorage);

const Initalcontacts = contactsLocalStorageParsed;

const contactsReducer = (state = Initalcontacts, action) => {
    switch (action.type) {
        case "contacts/ADD" :
            return [...state, action.payload];
        case 'contacts/DELETE':
            return state.filter(contact => contact.id !== action.payload);
        default :
            return state;
    }
};


export const rootReducer = combineReducers({
    contacts :  contactsReducer,
});

  