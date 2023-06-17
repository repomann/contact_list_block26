import ContactList from './contactList.jsx'

export default function ContactRow({ contact }) {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  