/* eslint import/no-mutable-exports :0 */
/* eslint react/no-array-index-key :0 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import FilterWrapper from '../styledComponents/FilterWrapper';

const FilterBox = (props) => (
  <FilterWrapper>
    <TextField
      onChange={(e) => props.updateFilter(e.target.value)}
      value={props.filter}
      hintText="Filter channels"
    />
  </FilterWrapper>
);

FilterBox.propTypes = {
  filter: PropTypes.string,
  updateFilter: PropTypes.func,
};

export default FilterBox;
