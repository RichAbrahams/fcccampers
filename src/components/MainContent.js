import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from '../styledComponents/MainWrapper';
import DataTabs from './DataTabs';
import Loading from './Loading';

const MainContent = (props) => (
  <MainWrapper className="main-content">
    {props.data.length || props.error ? <DataTabs {...props} /> : <Loading />}
  </MainWrapper>
);

MainContent.propTypes = {
  data: PropTypes.array,
  error: PropTypes.bool,
};

export default MainContent;

