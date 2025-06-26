import React from 'react';
import {
  Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from '@chakra-ui/react';

const CustomTable = ({ headers, data, headerColor = '#EAF1F3' }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers?.map((header) => (
              <Th style={{ backgroundColor: headerColor, color: '#000' }}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row) => (
            <Tr>
              {row?.map((cell) => (
                <Td>{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
