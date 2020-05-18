import { combineReducers } from 'redux';
import { userReducer, layoutReducer } from './reducer';

import { reducer as notifReducer } from 'redux-notifications';

const reducersCombined = combineReducers({
  user: userReducer,
  layout: layoutReducer,
  notifs: notifReducer,
});

export default reducersCombined;
