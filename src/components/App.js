import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import { uuid } from "uuidv4";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactsHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container ">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactsHandler}
              />
            }
          />
          {/* <Switch> */}
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          {/* </Switch> */}
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactsHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
