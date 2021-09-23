import { useEffect, useState } from 'react';
import { getData } from '../api';
import styled from 'styled-components';

const TableUI = styled.div`
  thead,
  tfoot {
    background-color: #3f87a6;
    color: #fff;
  }

  tbody {
    background-color: #e4f0f5;
  }

  caption {
    padding: 10px;
    caption-side: bottom;
  }

  table {
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-family: sans-serif;
    font-size: 0.8rem;
  }

  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    padding: 5px 10px;
  }

  td {
    text-align: center;
  }
`;
export const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const response = getData();
    setData(response);
  }, []);

  return (
    <TableUI>
      {data && (
        <>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Expenditure</th>
                <th>Expenditure</th>
              </tr>
            </thead>
            <tbody>
              {data.map((node) => {
                return (
                  <tr key={node.col1}>
                    <th>{node.col1}</th>
                    <td>{node.col2}</td>
                    <td>{node.col3}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </TableUI>
  );
};
