import { combineReducers } from 'redux-immutable';

/**
 * import modules reducers
 */
import appReducer from './containers/App/reducer';

const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
