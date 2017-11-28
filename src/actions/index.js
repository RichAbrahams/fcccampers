import {
  GET_TWITCH_DATA,
  TWITCH_DATA_RESULTS,
  TWITCH_DATA_ERROR,
  UPDATE_FILTER,
} from '../constants';

export const getTwitchData = () => ({ type: GET_TWITCH_DATA });
export const twitchDataResults = (payload) => ({ type: TWITCH_DATA_RESULTS, payload });
export const twitchDataError = (payload) => ({ type: TWITCH_DATA_ERROR, payload });
export const updateFilter = (payload) => ({ type: UPDATE_FILTER, payload });
