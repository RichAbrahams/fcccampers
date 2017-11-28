import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import Results from './Results';
import TabsWrapper from '../styledComponents/TabsWrapper';
import StyledCard from '../styledComponents/StyledCard';
import CardWrapper from '../styledComponents/CardWrapper';
import FilterBox from './FilterBox';

const DataTabs = (props) => (
  <CardWrapper className="card-wrapper">
    <StyledCard className="styled-card">
      <TabsWrapper className="tabs-wrapper">
        <Tabs>
          <Tab label="Online" style={{ background: '#2962FF' }}>
            <FilterBox {...props} />
            <Results data={props.onlineStreamers} filter={props.filter} />
          </Tab>
          <Tab label="Offline" style={{ background: '#2962FF' }}>
            <FilterBox {...props} />
            <Results data={props.offlineStreamers} filter={props.filter} />
          </Tab>
        </Tabs>
      </TabsWrapper>
    </StyledCard>
  </CardWrapper>
);

DataTabs.propTypes = {
  onlineStreamers: PropTypes.array,
  offlineStreamers: PropTypes.array,
  filter: PropTypes.string,
};

export default DataTabs;
