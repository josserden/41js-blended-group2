import { useState, useEffect } from 'react';
import {
  FormControl,
  InputGroup,
  Stack,
  InputLeftElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon, TriangleDownIcon } from '@chakra-ui/icons';

import * as ContactsService from 'service/api-service';

export default function Form() {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUser(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');

    const newContact = {
      name: user,
      number: phone,
      email: email,
    };

    ContactsService.createContact(newContact);

    setUser('');
    setPhone('');
    setEmail('');
  };

  return (
    <>
      <FormControl as="form" p={6} onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<TriangleDownIcon color="gray.400" />}
            />
            <Input
              type="text"
              placeholder="Your name"
              name="name"
              value={user}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.400" />}
            />
            <Input
              type="tel"
              placeholder="Phone number"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement children={<AtSignIcon color="gray.400" />} />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputGroup>

          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Stack>
      </FormControl>
    </>
  );
}
