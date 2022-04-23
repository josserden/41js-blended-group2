import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Contact from 'components/Contact';
import { nanoid } from 'nanoid';

function ContactList({ contacts, onDelete }) {
  return (
    <SimpleGrid columns={3} spacing={10}>
      {contacts &&
        contacts.map(contact => (
          <Contact key={nanoid()} {...contact} onDelete={onDelete} />
        ))}
    </SimpleGrid>
  );
}

export default ContactList;
