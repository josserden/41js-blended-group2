import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = userSlice.actions;
export default userSlice.reducer;
