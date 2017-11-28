import { put, takeEvery, fork, call } from 'redux-saga/effects';
import { GET_TWITCH_DATA } from '../constants';
import * as actions from '../actions';
import streamers from './streamers';


const buildUrl = (type) => {
  const url = streamers.reduce((list, streamer, index) => {
    const updatedList = index === 0 ? `${list}login=${streamer.login}` : `${list}&login=${streamer.login}`;
    return updatedList;
  }, `https://api.twitch.tv/helix/${type}?`);
  return url;
};

async function fetchData(url) {
  try {
    const request = new Request(url, {
      headers: new Headers({
        'Client-ID': '54hzo9bwldfb47s61m4ipd2krmv0i4',
      }),
    });
    const response = await fetch(request);
    const results = await response.json();
    return results;
  } catch (e) {
    return { error: 'An error prevented your search being completed' };
  }
}

function transformData(data) {
  const [userData, streamData] = data;
  const onlineIds = streamData.map((stream) => stream.user_id);
  const finishedData = userData.map((user) => {
    const online = onlineIds.includes(user.id);
    return Object.assign({}, user, { online });
  });
  return finishedData;
}

export function* getTwitchData() {
  const userData = yield call(fetchData, buildUrl('users'));
  const streamData = yield call(fetchData, buildUrl('streams'));
  if (userData.error || streamData.error) {
    yield put(actions.twitchDataError(streamData));
    return;
  }
  const transformedData = yield call(transformData, [userData.data, streamData.data]);
  yield put(actions.twitchDataResults(transformedData));
}

export default function* watchIncrementAsync() {
  yield fork(takeEvery, GET_TWITCH_DATA, getTwitchData);
}
