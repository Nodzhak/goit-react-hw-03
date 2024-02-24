import React from 'react';
import Contact from './Contact.jsx';
import styles from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    const { contacts, onRemoveContact } = this.props;

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
  }
}

export default ContactList;
