import './App.css'
import ContactList from './components/contactList.jsx'
 import SelectedContact from "./components/SelectedContact";
import { useState } from 'react'




export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
       <SelectedContact />
      ) : (
        <ContactList />
      )}
    </>
  );
}
