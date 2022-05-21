import React from 'react';
import { BaseTable, THead, Td, Th } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/userSlice';

const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];

export const Table = () => {
  const users = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            {tableHeaders.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </tr>
        </THead>

        <tbody>
          {users.map((user, index) => {
            const { Svg } = user;
            return (
              <tr key={user.name}>
                <Td>{index + 1}</Td>
                <Td>
                  <img src={Svg} alt="" />
                </Td>

                <Td>{user.name}</Td>
                <Td>{user.age}</Td>
                <Td>{user.status}</Td>
                <Td>
                  <button
                    onClick={() => dispatch(removeContact(user.id))}
                    type="button"
                  >
                    Remove
                  </button>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </BaseTable>
    </>
  );
};
