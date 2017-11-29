import { put, takeEvery, fork, call } from 'redux-saga/effects';
import { uniqBy } from 'lodash/array';
import { GET_DATA } from '../constants';
import * as actions from '../actions';

async function fetchResult(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (e) {
    return { error: 'An error prevented your search being completed' };
  }
}

export function* updateResults() {
  const allTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  const thirtyDays = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  const allTimeResults = yield call(fetchResult, allTime);
  const thirtyDaysResults = yield call(fetchResult, thirtyDays);
  const data = allTimeResults.concat(thirtyDaysResults);
  const filteredData = uniqBy(data, 'username');
  if (data.error) {
    yield put(actions.dataError());
    return;
  }
  yield put(actions.dataResults(filteredData));
}

export default function* watchIncrementAsync() {
  yield fork(takeEvery, GET_DATA, updateResults);
}
