import React from 'react';
import ResultsTable from './ResultsTable';
import TableWrapper from '../styledComponents/TableWrapper';

const Results = (props) => (
  <TableWrapper >
    <ResultsTable {...props} />
  </TableWrapper>
);

export default Results;
