import React, { useState } from 'react';
import { Button, LabelText, BaseForm, Label, Input } from 'components';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { addContact } from 'redux/userSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { getStatus } from 'service';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-male-sprites';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const addName = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    let Svg = createAvatar(style, {
      size: '48px',
      type: 'svg',
      dataUri: true,
    });

    const status = await getStatus();

    dispatch(addContact({ Svg, id: nanoid(), name: name, age: age, status }));
    setName('');
    setAge('');
  };

  return (
    <BaseForm onSubmit={onSubmit}>
      <Label>
        <LabelText>
          <BsFillPersonFill />
          Name
        </LabelText>
        <Input
          onChange={addName}
          value={name}
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        <LabelText>
          <AiOutlineMessage />
          Age
        </LabelText>

        <Input
          onChange={addName}
          value={age}
          placeholder="Age"
          type="number"
          name="age"
          pattern="^[0-9]"
          title="Only integer number"
          min="1"
          step="1"
          required
        />
      </Label>

      <Button type="submit">add contact</Button>
    </BaseForm>
  );
};
