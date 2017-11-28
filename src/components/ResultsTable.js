import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import {
  Table,
  TableBody,
} from 'material-ui/Table';
import Row from './Row';

const ResultsTable = (props) => {
  const { data } = props;

  return (
    <Table
      selectable={false}
    >
      <TableBody>
        { data.map((stream) => <Row stream={stream} key={shortid.generate()} />)}
      </TableBody>
    </Table>
  );
};

ResultsTable.propTypes = {
  data: PropTypes.array,
};

export default ResultsTable;
