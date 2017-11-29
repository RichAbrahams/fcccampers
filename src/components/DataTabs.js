import React from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import StyledCard from '../styledComponents/StyledCard';
import CardWrapper from '../styledComponents/CardWrapper';

const DataTabs = (props) => (
  <CardWrapper className="card-wrapper">
    <StyledCard className="styled-card">
      <Results {...props} />
    </StyledCard>
  </CardWrapper>
);

DataTabs.propTypes = {
  thirtyDays: PropTypes.array,
  allTime: PropTypes.array,
};

export default DataTabs;
