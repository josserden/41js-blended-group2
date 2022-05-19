import React from 'react';
import { BaseTable, THead, Td, Th } from 'components';

export const Table = () => {
  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </tr>
        </THead>

        <tbody>
          <tr>
            <Td>type</Td>
            <Td>amount</Td>
            <Td>currency</Td>
          </tr>
        </tbody>
      </BaseTable>
    </>
  );
};
