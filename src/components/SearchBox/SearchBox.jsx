import React from 'react';
import styles from './SearchBox.module.css';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox () {

  const searchBoxId = useId();
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectNameFilter);

  const onHandleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <h2 className={styles.title} htmlFor={searchBoxId}>Find contacts by name</h2>
      <input
        className={styles.input}
        type="text"
        onChange={onHandleChange}
        id={searchBoxId}
        value={valueFilter}
        placeholder="Enter name..."
      />
    </div>
  );
};
