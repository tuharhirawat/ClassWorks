import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function EmergencyContactSystem() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h2>Emergency Contact System</h2>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default EmergencyContactSystem;
