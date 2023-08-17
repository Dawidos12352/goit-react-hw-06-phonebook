import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import Contact from "../Contact/Contact"



const ContactsList = ({ filterText }) => {

    const contact = useSelector(getContacts);
    
    const filteredContacts = contact.filter(contact => 
    contact.name.toLowerCase().includes(filterText.toLowerCase())
    );

    localStorage.setItem('contacts', JSON.stringify(contact));

    return(

        <ul >
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact}/>
          ))}
        </ul>
    );
};

ContactsList.propTypes = {
    filterText : PropTypes.string.isRequired,
};

export default ContactsList;