import { createSelector } from 'reselect';

const selectDataDomain = (state) => state.data;

const selectFilter = () => createSelector(
  selectDataDomain,
  (substate) => substate.filter
);

const selectOnlineStreamers = () => createSelector(
  selectDataDomain,
  (substate) => substate.streamData.filter((user) => user.online)
);

const selectOfflineStreamers = () => createSelector(
  selectDataDomain,
  (substate) => substate.streamData.filter((user) => !user.online)
);

const selectError = () => createSelector(
  selectDataDomain,
  (substate) => substate.error
);

export {
  selectFilter,
  selectOnlineStreamers,
  selectOfflineStreamers,
  selectError,
};
