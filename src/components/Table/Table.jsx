import Avatar from 'react-avatar';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { removeContact } from 'redux/contacts/contactsSlice';
import { BaseTable, THead, Td, Th } from 'components';
import { MdDelete } from 'react-icons/md';

const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];

export const Table = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <BaseTable>
          <THead>
            <tr>
              {tableHeaders.map((item, index) => (
                <Th key={index}>{item}</Th>
              ))}
            </tr>
          </THead>

          <tbody>
            {contacts.map(({ id, avatar, name, age, status }, index) => (
              <tr key={id}>
                <Td>{index + 1}</Td>
                <Td>
                  <Avatar size={40} round={true} name={avatar} />
                </Td>
                <Td>{name}</Td>
                <Td>{age}</Td>
                <Td>{status === 'yes' ? 'online' : 'offline'}</Td>
                <Td>
                  <button type="button" onClick={() => handleDelete(id)}>
                    <MdDelete size="20px" />
                  </button>
                </Td>
              </tr>
            ))}
          </tbody>
        </BaseTable>
      ) : (
        <p>{'No contacts 😭'}</p>
      )}
    </>
  );
};
