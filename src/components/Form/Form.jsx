import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/contactsSlice';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getStatus } from 'service';

import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

import { Button, LabelText, BaseForm, Label, Input } from 'components';
import { useLocalStorage } from 'hooks';

export const Form = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [age, setAge] = useLocalStorage('age', '');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'age':
        setAge(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = async e => {
    e.preventDefault();

    const status = await getStatus();

    const newContact = {
      id: nanoid(),
      name,
      age,
      avatar: name,
      status,
    };

    dispatch(addContact(newContact));

    handleReset();
  };
  const handleReset = () => {
    setName('');
    setAge('');
  };

  return (
    <BaseForm onSubmit={handleSubmit}>
      <Label>
        <LabelText>
          <BsFillPersonFill />
          Name
        </LabelText>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>

      <Label>
        <LabelText>
          <AiOutlineMessage />
          Age
        </LabelText>

        <Input
          placeholder="Age"
          type="number"
          name="age"
          pattern="^[0-9]"
          title="Only integer number"
          min="1"
          step="1"
          value={age}
          onChange={handleChange}
          required
        />
      </Label>

      <Button type="submit">add contact</Button>
    </BaseForm>
  );
};
