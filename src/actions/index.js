import {
  GET_DATA,
  DATA_RESULTS,
  DATA_ERROR,
} from '../constants';

export const getData = () => ({ type: GET_DATA });
export const dataResults = (payload) => ({ type: DATA_RESULTS, payload });
export const dataError = () => ({ type: DATA_ERROR });
