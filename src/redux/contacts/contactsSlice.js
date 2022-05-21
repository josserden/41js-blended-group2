import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
