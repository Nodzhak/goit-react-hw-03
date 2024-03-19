import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

function App () {

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
    </>
  );
};

export default App;