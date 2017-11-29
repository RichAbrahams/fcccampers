import {
  DATA_RESULTS,
  DATA_ERROR,
} from '../constants';

const initialState = {
  data: [],
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_ERROR: {
      return {
        ...state,
        error: true,
        data: [],
      };
    }
    case DATA_RESULTS: {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
