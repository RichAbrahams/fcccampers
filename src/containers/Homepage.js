import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import * as selectors from '../selectors';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Container from '../styledComponents/Container';

export class Home extends Component {
  componentWillMount() {
    this.props.getTwitchData();
  }

  render() {
    return (
      <Container>
        <Header></Header>
        <MainContent {...this.props} />
        <Footer></Footer>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  filter: selectors.selectFilter(),
  onlineStreamers: selectors.selectOnlineStreamers(),
  offlineStreamers: selectors.selectOfflineStreamers(),
  error: selectors.selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTwitchData: () => dispatch(actions.getTwitchData()),
    updateFilter: (payload) => dispatch(actions.updateFilter(payload)),
  };
}

Home.propTypes = {
  getTwitchData: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
