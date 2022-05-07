import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register('First name', {
          required: true,
          min: 2,
          maxLength: 80,
          pattern:
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
        })}
        required
      />

      <input
        type="text"
        placeholder="Last name"
        {...register('Last name', {
          required: true,
          min: -12,
          maxLength: 100,
          pattern:
            /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
        })}
      />

      <input
        type="email"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <input
        type="tel"
        placeholder="Mobile number"
        {...register('Mobile number', {
          required: true,
          maxLength: 17,
          pattern:
            /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
        })}
      />

      <select {...register('Title', { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input
        {...register('Developer', { required: true })}
        type="radio"
        value="Yes"
      />
      <input
        {...register('Developer', { required: true })}
        type="radio"
        value="No"
      />

      <input type="submit" />
    </form>
  );
}
