import React from 'react';
import { BaseTable, THead, Td, Th } from 'components';

const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];

export const Table = () => {
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
          <tr>
            <Td>1</Td>
            <Td>avatar</Td>
            <Td>name</Td>
            <Td>age</Td>
            <Td>status</Td>
            <Td>option</Td>
          </tr>
        </tbody>
      </BaseTable>
    </>
  );
};
