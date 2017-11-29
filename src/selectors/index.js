import { createSelector } from 'reselect';

const selectDataDomain = (state) => state.data;

const selectData = () => createSelector(
  selectDataDomain,
  (substate) => substate.data
);

const selectError = () => createSelector(
  selectDataDomain,
  (substate) => substate.error
);

export {
  selectData,
  selectError,
};
