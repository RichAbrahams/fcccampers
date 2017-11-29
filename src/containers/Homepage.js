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
    this.props.getData();
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
  error: selectors.selectError(),
  data: selectors.selectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(actions.getData()),
  };
}

Home.propTypes = {
  getData: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
