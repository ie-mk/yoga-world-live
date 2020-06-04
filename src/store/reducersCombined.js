import { combineReducers } from 'redux';
import {
  userReducer,
  layoutReducer,
  courseReducer,
  taskReducer,
  learningPathReducer,
  messageReducer,
} from './reducer';

import { reducer as notifReducer } from 'redux-notifications';

const reducersCombined = combineReducers({
  user: userReducer,
  courses: courseReducer,
  tasks: taskReducer,
  learningPaths: learningPathReducer,
  messages: messageReducer,
  layout: layoutReducer,
  notifs: notifReducer,
});

export default reducersCombined;
