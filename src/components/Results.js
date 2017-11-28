import React from 'react';
import PropTypes from 'prop-types';
import ResultsTable from './ResultsTable';
import NoResults from './NoResults';
import TableWrapper from '../styledComponents/TableWrapper';

const Results = (props) => {
  const { data, filter } = props;
  const filterData = () => {
    if (!filter) {
      return data;
    }
    return data.filter((user) => user.display_name.toLowerCase().includes(filter.toLowerCase()));
  };
  return (
    <TableWrapper >
      { filterData().length ? <ResultsTable {...props} data={filterData()} /> : <NoResults /> }
    </TableWrapper>
  );
};

Results.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string,
};

export default Results;
