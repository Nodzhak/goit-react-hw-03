import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact ({ contact }) {
  if (!contact) {
    return null; 
  }

  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <li className={styles.contact}>
        <div className={styles.contactInfo}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
        </div>
        <button type="button" onClick={handleDeleteClick} className={styles.deleteButton}>
          Delete
        </button>
      </li>
    </>
  );
};


