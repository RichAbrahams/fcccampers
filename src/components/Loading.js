import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import LoadingWrapper from '../styledComponents/LoadingWrapper';

export default () => (
  <LoadingWrapper>
    <CircularProgress size={160} thickness={10} />
  </LoadingWrapper>
);
