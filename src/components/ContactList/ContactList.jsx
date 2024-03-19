import React from 'react';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const initialContacts = useSelector(selectContacts);
  const filteredName = useSelector(selectNameFilter);

  const filteredContacts = initialContacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );

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

