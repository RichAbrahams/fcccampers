import {
  TWITCH_DATA_RESULTS, TWITCH_DATA_ERROR, UPDATE_FILTER,
} from '../constants';

const initialState = {
  streamData: [],
  error: null,
  filter: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TWITCH_DATA_RESULTS: {
      return {
        ...state,
        error: null,
        streamData: action.payload,
      };
    }
    case TWITCH_DATA_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        streamData: [],
      };
    }
    case UPDATE_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
