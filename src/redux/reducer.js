import { GET_RANGE } from './types';

import { storage } from '../data';

const initialState = { ...storage };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RANGE:
      return {
        ...state,
        range: action.range
      };
    default:
      return state;
  }
};

export default reducer;
