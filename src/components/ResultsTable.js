import React from 'react';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

const ResultsTable = (props) => {
  const { data } = props;

  const columns = [{
    Header: 'User',
    accessor: 'username', // String-based value accessors!
  }, {
    Header: 'All Time',
    accessor: 'alltime',
  }, {
    Header: 'Thirty Days',
    accessor: 'recent',
  }];

  return (
    <ReactTable
      data={data}
      columns={columns}
    />
  );
};

ResultsTable.propTypes = {
  data: PropTypes.array,
};

export default ResultsTable;
