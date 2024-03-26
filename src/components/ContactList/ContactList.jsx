import React from 'react';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice'; 

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts); 

  return (
    <>
      <ul className={styles.contactList}>
        {filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </ul>
    </>
  );
}