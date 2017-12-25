import { fromJS } from 'immutable';
import {
  FETCH_APP_VERSION_SUCCESS,
} from './constants';

const initialState = fromJS({
  appVersion: {},
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_APP_VERSION_SUCCESS: {
      const version = action.payload;
      return state.set('appVersion', fromJS(version && version.data || {}));
    }
  }
  return state;
}
