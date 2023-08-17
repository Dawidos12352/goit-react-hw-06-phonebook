import React, { useState } from "react";
import Phonebook from "components/Phonebook/Phonebook";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter"

const App = () => {
  
   const [filter, setFilter] = useState("");

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: '#010101',
        flexDirection: "column",
      }}
    >
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter filterText={filter}
          handleFilter={setFilter}/>
      
      <ContactsList
          filterText={filter}
        />
      
    </div> 
  );
};


export default App;