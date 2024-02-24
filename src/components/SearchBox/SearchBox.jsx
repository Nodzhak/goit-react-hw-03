import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const onHandleChange = event => {
    let searchValue = event.target.value;
    onChange(searchValue);
  };

  return (
    <div className={styles.searchBox}>
      <h2 className={styles.title}>Find contacts by name</h2>
      <input
        className={styles.input}
        type="text"
        onChange={onHandleChange}
        value={value}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;

