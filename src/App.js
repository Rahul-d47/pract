// App.js
import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import AddContactForm from './components/Contact/AddContactForm';
import { v4 as uuid4 } from 'uuid';
import './App.css';

function App() {

  const key1 = 'add';
  const storedContact = JSON.parse(localStorage.getItem(key1)) ||  [];
  const [add, setadd] = useState(storedContact);

  useEffect (()=>{
    localStorage.setItem(key1, JSON.stringify(add))
  },[add])

  const addcontact = (data) => {
    setadd([...add, { id: 
      uuid4(), 
      data }]);
  };

  const remove = (id) => {
    const updatedContacts = add.filter((item) => item.id !== id);
    setadd(updatedContacts);
  };

  return (
    <div className="App">
      <Home addContact={addcontact} />
      <AddContactForm add={add} 
      remove={remove}
       />
    </div>
  );
}

export default App;
