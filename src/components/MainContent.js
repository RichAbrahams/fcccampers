import React from 'react';
import PropTypes from 'prop-types';
import MainWrapper from '../styledComponents/MainWrapper';
import DataTabs from './DataTabs';
import Loading from './Loading';

const MainContent = (props) => (
  <MainWrapper className="main-content">
    {props.onlineStreamers.length || props.offlineStreamers.length ? <DataTabs {...props} /> : <Loading />}
  </MainWrapper>
);

MainContent.propTypes = {
  onlineStreamers: PropTypes.array,
  offlineStreamers: PropTypes.array,
};

export default MainContent;

