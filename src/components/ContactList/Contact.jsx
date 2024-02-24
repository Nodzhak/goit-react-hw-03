import React from 'react';
import styles from './ContactList.module.css';

const Contact = ({ id, name, number, onRemoveContact }) => {
  const handleDeleteClick = () => {
    onRemoveContact(id);
  };

  return (
    <>
      <li className={styles.contact}>
        <div className={styles.contactInfo}>
          <span>{name}</span>
          <span>{number}</span>
        </div>
        <button type="button" onClick={handleDeleteClick} className={styles.deleteButton}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
