import React from "react";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.name}, <strong>Phone:</strong> {contact.phone},{" "}
              <strong>Relationship:</strong> {contact.relationship}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
