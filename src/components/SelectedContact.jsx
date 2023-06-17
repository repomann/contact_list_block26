import { useEffect } from 'react'
import { useState } from 'react'

export default function SelectedContact () {
    const [selectedContactID, setSelectedContactID] = useState([])
   useEffect(() => {
   async function fetchSelectedContacts() {
     try {
         const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
         const selectedContactID = await response.json();
           setSelectedContactID(selectedContactID.results);
 
         } catch (error) {
           console.error(error);
         }
       }
       fetchSelectedContacts()
     }, []);
 
   return (
     <table>
       <thead>
         <tr>
           <th colSpan="3">Contact</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>Name</td>
           <td>Email</td>
           <td>Phone</td>
         </tr>
         {selectedContactID.map((contact) => {
           return <SelectedContact key={contact.id} contact={contact} />;
         })}
       </tbody>
     </table>
  )
 }