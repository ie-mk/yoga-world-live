import {
  all,
  call,
  delay,
  select,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { adActions, userActions } from './actions';
import api from '../api/api.min';
import moment from 'moment';
import { getUID } from './selectors';
import Router from 'next/router';
import { resourceActions } from './actions';

function* handleLoginFlow({ payload: user }) {
  const uid = user && user.uid;
  if (!uid) return;

  try {
    const profile = yield api.user.fetchUserProfile(uid);

    if (profile) {
      const profile = yield api.user.fetchUserProfile(uid);
      const permissions = yield api.user.fetchUserPermissions(uid);

      yield put(userActions.fetchUserProfile.success(profile));
      yield put(userActions.fetchUserPermissions.success(permissions));
      yield put(userActions.setIsFirstLogin(false));
    } else {
      yield put(userActions.setIsFirstLogin(true));
      const firstName = user.displayName.split(' ')[0];
      const lastName = user.displayName.split(' ')[1];
      // remove falsy values from object otherwise firebase will complain
      for (var k in user) {
        if (user.hasOwnProperty(k) && !user[k]) {
          delete user[k];
        }
      }

      yield api.user.createUserProfile({
        ...user,
        firstName,
        lastName,
        firstLogin: moment().format(),
        lastLogin: moment().format(),
      });
    }
  } catch (err) {
    yield put(userActions.fetchUserProfile.failure(err));
  }
}

function* fetchUserProfile({ payload: uid }) {
  try {
    const profile = yield api.user.fetchUserProfile(uid);
    yield put(userActions.fetchUserProfile.success(profile));
  } catch (err) {
    yield put(userActions.fetchUserProfile.failure(err));
  }
}

function* updateUserProfilePicture({ payload: { uid, image } }) {
  try {
    yield api.user.updateProfilePicture(uid, image);
    yield put(userActions.updateUserProfilePicture.success());
    yield fetchUserProfile({ payload: uid });
  } catch (err) {
    yield put(userActions.updateUserProfile.failure(err));
  }
}

// payload data should include uid
function* updateUserProfile({ payload }) {
  try {
    yield api.user.updateUserProfile(payload);
    yield fetchUserProfile({ payload: payload.uid });
  } catch (err) {
    yield put(userActions.updateUserProfile.failure(err));
  }
}

// ============================ COURSES =====================================

function* fetchCourses({ payload }) {
  try {
    const courses = yield api.resources.fetchResources(
      'courses',
      payload.queries,
    );
    yield put(resourceActions.fetchCourses.success(courses));
  } catch (err) {
    yield put(resourceActions.fetchCourses.failure(err));
  }
}

function* fetchCourse({ payload }) {
  try {
    const course = yield api.resources.fetchResource('courses', payload.docId);
    yield put(resourceActions.fetchCourse.success(course));
  } catch (err) {
    yield put(resourceActions.fetchCourse.failure(err));
  }
}

function* createCourse({ payload }) {
  try {
    yield api.resources.createResource('courses', payload.data);
    yield put(resourceActions.createCourse.success());
  } catch (err) {
    yield put(resourceActions.createCourse.failure(err));
  }
}

function* updateCourse({ payload }) {
  try {
    yield api.resources.updateResource('courses', payload.docId, payload.data);
    yield put(resourceActions.updateCourse.success());
  } catch (err) {
    yield put(resourceActions.updateCourse.failure(err));
  }
}

function* deleteCourse({ payload }) {
  try {
    yield api.resources.deleteResource('courses', payload.docId);
    yield put(resourceActions.deleteCourse.success());
  } catch (err) {
    yield put(resourceActions.deleteCourse.failure(err));
  }
}

// ============================ COURSES =====================================

function* fetchTasks({ payload }) {
  try {
    const tasks = yield api.resources.fetchResources('tasks', payload.queries);
    yield put(resourceActions.fetchTasks.success(tasks));
  } catch (err) {
    yield put(resourceActions.fetchTasks.failure(err));
  }
}

function* fetchTask({ payload }) {
  try {
    const task = yield api.resources.fetchResource('tasks', payload.docId);
    yield put(resourceActions.fetchTask.success(task));
  } catch (err) {
    yield put(resourceActions.fetchTask.failure(err));
  }
}

function* createTask({ payload }) {
  try {
    yield api.resources.createResource('tasks', payload.data);
    yield put(resourceActions.createTask.success());
  } catch (err) {
    yield put(resourceActions.createTask.failure(err));
  }
}

function* updateTask({ payload }) {
  try {
    yield api.resources.updateResource('tasks', payload.docId, payload.data);
    yield put(resourceActions.updateTask.success());
  } catch (err) {
    yield put(resourceActions.updateTask.failure(err));
  }
}

function* deleteTask({ payload }) {
  try {
    yield api.resources.deleteResource('tasks', payload.docId);
    yield put(resourceActions.deleteTask.success());
  } catch (err) {
    yield put(resourceActions.deleteTask.failure(err));
  }
}

// ============================ Messages =====================================

function* fetchMessages({ payload }) {
  try {
    const messages = yield api.resources.fetchResources(
      'messages',
      payload.queries,
    );
    yield put(resourceActions.fetchMessages.success(messages));
  } catch (err) {
    yield put(resourceActions.fetchMessages.failure(err));
  }
}

function* fetchMessage({ payload }) {
  try {
    const message = yield api.resources.fetchResource(
      'messages',
      payload.docId,
    );
    yield put(resourceActions.fetchMessage.success(message));
  } catch (err) {
    yield put(resourceActions.fetchMessage.failure(err));
  }
}

function* createMessage({ payload }) {
  try {
    yield api.resources.createResource('messages', payload.data);
    yield put(resourceActions.createMessage.success());
  } catch (err) {
    yield put(resourceActions.createMessage.failure(err));
  }
}

function* updateMessage({ payload }) {
  try {
    yield api.resources.updateResource('messages', payload.docId, payload.data);
    yield put(resourceActions.updateMessage.success());
  } catch (err) {
    yield put(resourceActions.updateMessage.failure(err));
  }
}

function* deleteMessage({ payload }) {
  try {
    yield api.resources.deleteResource('messages', payload.docId);
    yield put(resourceActions.deleteMessage.success());
  } catch (err) {
    yield put(resourceActions.deleteMessage.failure(err));
  }
}

// ============================ Learning Path =====================================

function* fetchLearningPaths({ payload }) {
  try {
    const messages = yield api.resources.fetchResources(
      'messages',
      payload.queries,
    );
    yield put(resourceActions.fetchLearningPaths.success(messages));
  } catch (err) {
    yield put(resourceActions.fetchLearningPaths.failure(err));
  }
}

function* fetchLearningPath({ payload }) {
  try {
    const message = yield api.resources.fetchResource(
      'learningPaths',
      payload.docId,
    );
    yield put(resourceActions.fetchLearningPath.success(message));
  } catch (err) {
    yield put(resourceActions.fetchLearningPath.failure(err));
  }
}

function* createLearningPath({ payload }) {
  try {
    yield api.resources.createResource('learningPaths', payload.data);
    yield put(resourceActions.createLearningPath.success());
  } catch (err) {
    yield put(resourceActions.createLearningPath.failure(err));
  }
}

function* updateLearningPath({ payload }) {
  try {
    yield api.resources.updateResource(
      'learningPaths',
      payload.docId,
      payload.data,
    );
    yield put(resourceActions.updateLearningPath.success());
  } catch (err) {
    yield put(resourceActions.updateLearningPath.failure(err));
  }
}

function* deleteLearningPath({ payload }) {
  try {
    yield api.resources.deleteResource('learningPaths', payload.docId);
    yield put(resourceActions.deleteLearningPath.success());
  } catch (err) {
    yield put(resourceActions.deleteLearningPath.failure(err));
  }
}

function* rootSaga() {
  // ========================== USER ===============================
  yield all([
    takeLatest(userActions.fetchUserProfile.request.type, fetchUserProfile),
  ]);
  yield all([
    takeLatest(userActions.updateUserProfile.request.type, updateUserProfile),
  ]);
  yield all([takeLatest(resourceActions.updateUserProfilePicture)]);
  yield all([
    takeLatest(userActions.saveUserInfoFromLoginProvider, handleLoginFlow),
  ]);
  // ========================== COURSES ===============================
  yield all([takeLatest(resourceActions.fetchCourses.request(), fetchCourses)]);
  yield all([takeLatest(resourceActions.fetchCourse.request(), fetchCourse)]);
  yield all([takeLatest(resourceActions.createCourse.request(), createCourse)]);
  yield all([takeLatest(resourceActions.updateCourse.request(), updateCourse)]);
  yield all([takeLatest(resourceActions.deleteCourse.request(), deleteCourse)]);
  // ========================== TASKS ===============================
  yield all([takeLatest(resourceActions.fetchTasks.request(), fetchTasks)]);
  yield all([takeLatest(resourceActions.fetchTask.request(), fetchTask)]);
  yield all([takeLatest(resourceActions.createTask.request(), createTask)]);
  yield all([takeLatest(resourceActions.updateTask.request(), updateTask)]);
  yield all([takeLatest(resourceActions.deleteTask.request(), deleteTask)]);
  // ========================== MESSAGES ===============================
  yield all([
    takeLatest(resourceActions.fetchMessages.request(), fetchMessages),
  ]);
  yield all([takeLatest(resourceActions.fetchMessage.request(), fetchMessage)]);
  yield all([
    takeLatest(resourceActions.createMessage.request(), createMessage),
  ]);
  yield all([
    takeLatest(resourceActions.updateMessage.request(), updateMessage),
  ]);
  yield all([
    takeLatest(resourceActions.deleteMessage.request(), deleteMessage),
  ]);
  // ========================== LEARNING PATH ===============================
  yield all([
    takeLatest(
      resourceActions.fetchLearningPaths.request(),
      fetchLearningPaths,
    ),
  ]);
  yield all([
    takeLatest(resourceActions.fetchLearningPath.request(), fetchLearningPath),
  ]);
  yield all([
    takeLatest(
      resourceActions.createLearningPath.request(),
      createLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.updateLearningPath.request(),
      updateLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.deleteLearningPath.request(),
      deleteLearningPath,
    ),
  ]);
}

export default rootSaga;
