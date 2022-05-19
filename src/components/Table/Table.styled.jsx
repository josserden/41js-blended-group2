import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const THead = styled.thead`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Td = styled.td`
  padding: 10px 110px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

export const Th = styled.th`
  padding: 10px 110px;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
`;
