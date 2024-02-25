import React from 'react';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onRemoveContact={onRemoveContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
