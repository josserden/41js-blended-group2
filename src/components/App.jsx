import { useState, useEffect } from 'react';
import * as ContactsService from 'service/api-service';

import Header from 'components/Header';
import Section from 'components/Section';
import ContactList from 'components/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contacts = await ContactsService.getContacts();
        setContacts(contacts);
      } catch (error) {
        setError(error);
      }
    };

    fetchContacts();
  }, []);

  const onDelete = id => {
    ContactsService.deleteContact(id);

    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <Header />

      {error && <p>{error.message}</p>}

      <Section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </Section>
    </>
  );
};
