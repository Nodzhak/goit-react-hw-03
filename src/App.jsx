import React, { useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import { selectLoading, selectError } from './redux/contactsSlice';
import Loader from './components/Loader/Loader.jsx';
import Error from './components/Error/Error.jsx';

function App () {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
       <h1>Phonebook</h1>
      <ContactForm />
      {loading && <Loader>Loading contacts....</Loader>}
      {!loading && !error && <SearchBox />}
      {error && <Error>Error! </Error>}
      <ContactList />
    </>
  );
};

export default App;