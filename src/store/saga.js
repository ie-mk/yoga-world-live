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
import { getUID, getEditingCourseId } from './selectors';
import Router from 'next/router';
import { resourceActions } from './actions';
import { courseReducer } from './reducer';

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

function* fetchCourses({ payload = {} }) {
  try {
    const courses = yield api.resource.fetchResources(
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
    const course = yield api.resource.fetchResource('courses', payload);
    yield put(resourceActions.fetchCourse.success(course));
  } catch (err) {
    yield put(resourceActions.fetchCourse.failure(err));
  }
}

function* createCourse({ payload = {} }) {
  const uid = yield select(getUID);

  const data = {
    ...payload.data,
    ownerId: uid,
    published: false,
    edited: moment().format(),
  };
  try {
    const courseId = yield api.resource.createResource('courses', data);
    yield put(resourceActions.createCourse.success());
    yield put(resourceActions.setEditableCourseId(courseId));
  } catch (err) {
    yield put(resourceActions.createCourse.failure(err));
  }
}

function* updateCourse({ payload }) {
  const courseId = yield select(getEditingCourseId);
  try {
    yield api.resource.updateResource('courses', courseId, payload.data);
    yield put(resourceActions.updateCourse.success());
    yield fetchCourse({ payload: courseId });
  } catch (err) {
    yield put(resourceActions.updateCourse.failure(err));
  }
}

function* deleteCourse({ payload }) {
  try {
    yield api.resource.deleteResource('courses', payload);
    yield put(resourceActions.deleteCourse.success());
    yield put(resourceActions.deleteCourseFromState(payload));
  } catch (err) {
    yield put(resourceActions.deleteCourse.failure(err));
  }
}

// ============================ COURSES =====================================

function* fetchTasks({ payload }) {
  try {
    const tasks = yield api.resource.fetchResources('tasks', payload.queries);
    yield put(resourceActions.fetchTasks.success(tasks));
  } catch (err) {
    yield put(resourceActions.fetchTasks.failure(err));
  }
}

function* fetchTask({ payload }) {
  try {
    const task = yield api.resource.fetchResource('tasks', payload.docId);
    yield put(resourceActions.fetchTask.success(task));
  } catch (err) {
    yield put(resourceActions.fetchTask.failure(err));
  }
}

function* createTask({ payload }) {
  try {
    yield api.resource.createResource('tasks', payload.data);
    yield put(resourceActions.createTask.success());
  } catch (err) {
    yield put(resourceActions.createTask.failure(err));
  }
}

function* updateTask({ payload }) {
  try {
    yield api.resource.updateResource('tasks', payload.docId, payload.data);
    yield put(resourceActions.updateTask.success());
  } catch (err) {
    yield put(resourceActions.updateTask.failure(err));
  }
}

function* deleteTask({ payload }) {
  try {
    yield api.resource.deleteResource('tasks', payload.docId);
    yield put(resourceActions.deleteTask.success());
  } catch (err) {
    yield put(resourceActions.deleteTask.failure(err));
  }
}

// ============================ CHAPTERS =====================================

function* fetchChapters() {
  const courseId = select(getEditingCourseId);
  try {
    const tasks = yield api.resource.fetchResources(
      'courses',
      courseId,
      'chapters',
    );
    yield put(resourceActions.fetchChapters.success(tasks));
  } catch (err) {
    yield put(resourceActions.fetchChapters.failure(err));
  }
}

function* fetchChapter({ payload }) {
  try {
    const task = yield api.resource.fetchResource('tasks', payload.docId);
    yield put(resourceActions.fetchChapter.success(task));
  } catch (err) {
    yield put(resourceActions.fetchChapter.failure(err));
  }
}

function* createChapter() {
  const courseId = select(getEditingCourseId);
  try {
    const createdCourseId = yield api.resource.createSubCollection(
      'courses',
      courseId,
      'chapters',
      {
        created: moment().transform(),
      },
    );
    debugger;
    yield put(resourceActions.createChapter.success(createdCourseId));
  } catch (err) {
    yield put(resourceActions.createChapter.failure(err));
  }
}

function* updateChapter({ payload }) {
  const courseId = select(getEditingCourseId);
  try {
    const tasks = yield api.resource.updateSubCollection(
      'courses',
      courseId,
      'chapters',
    );
  } catch (err) {
    yield put(resourceActions.updateChapter.failure(err));
  }
}

function* deleteChapter({ payload }) {
  try {
    yield api.resource.deleteResource('tasks', payload.docId);
    yield put(resourceActions.deleteChapter.success());
  } catch (err) {
    yield put(resourceActions.deleteChapter.failure(err));
  }
}

// ============================ Messages =====================================

function* fetchMessages({ payload }) {
  try {
    const messages = yield api.resource.fetchResources(
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
    const message = yield api.resource.fetchResource('messages', payload.docId);
    yield put(resourceActions.fetchMessage.success(message));
  } catch (err) {
    yield put(resourceActions.fetchMessage.failure(err));
  }
}

function* createMessage({ payload }) {
  try {
    yield api.resource.createResource('messages', payload.data);
    yield put(resourceActions.createMessage.success());
  } catch (err) {
    yield put(resourceActions.createMessage.failure(err));
  }
}

function* updateMessage({ payload }) {
  try {
    yield api.resource.updateResource('messages', payload.docId, payload.data);
    yield put(resourceActions.updateMessage.success());
  } catch (err) {
    yield put(resourceActions.updateMessage.failure(err));
  }
}

function* deleteMessage({ payload }) {
  try {
    yield api.resource.deleteResource('messages', payload.docId);
    yield put(resourceActions.deleteMessage.success());
  } catch (err) {
    yield put(resourceActions.deleteMessage.failure(err));
  }
}

// ============================ Learning Path =====================================

function* fetchLearningPaths({ payload }) {
  try {
    const messages = yield api.resource.fetchResources(
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
    const message = yield api.resource.fetchResource(
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
    yield api.resource.createResource('learningPaths', payload.data);
    yield put(resourceActions.createLearningPath.success());
  } catch (err) {
    yield put(resourceActions.createLearningPath.failure(err));
  }
}

function* updateLearningPath({ payload }) {
  try {
    yield api.resource.updateResource(
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
    yield api.resource.deleteResource('learningPaths', payload.docId);
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
  yield all([
    takeLatest(
      userActions.updateUserProfilePicture.request.type,
      updateUserProfilePicture,
    ),
  ]);
  yield all([
    takeLatest(userActions.saveUserInfoFromLoginProvider, handleLoginFlow),
  ]);
  // ========================== COURSES ===============================
  yield all([
    takeLatest(resourceActions.fetchCourses.request.type, fetchCourses),
  ]);
  yield all([
    takeLatest(resourceActions.fetchCourse.request.type, fetchCourse),
  ]);
  yield all([
    takeLatest(resourceActions.createCourse.request.type, createCourse),
  ]);
  yield all([
    takeLatest(resourceActions.updateCourse.request.type, updateCourse),
  ]);
  yield all([
    takeLatest(resourceActions.deleteCourse.request.type, deleteCourse),
  ]);
  // ========================== CHAPTERS ===============================
  yield all([
    takeLatest(resourceActions.fetchChapters.request.type, fetchChapters),
  ]);
  yield all([
    takeLatest(resourceActions.fetchChapter.request.type, fetchChapter),
  ]);
  yield all([
    takeLatest(resourceActions.createChapter.request.type, createChapter),
  ]);
  yield all([
    takeLatest(resourceActions.updateChapter.request.type, updateChapter),
  ]);
  yield all([
    takeLatest(resourceActions.deleteChapter.request.type, deleteChapter),
  ]);
  // ========================== TASKS ===============================
  yield all([takeLatest(resourceActions.fetchTasks.request.type, fetchTasks)]);
  yield all([takeLatest(resourceActions.fetchTask.request.type, fetchTask)]);
  yield all([takeLatest(resourceActions.createTask.request.type, createTask)]);
  yield all([takeLatest(resourceActions.updateTask.request.type, updateTask)]);
  yield all([takeLatest(resourceActions.deleteTask.request.type, deleteTask)]);
  // ========================== MESSAGES ===============================
  yield all([
    takeLatest(resourceActions.fetchMessages.request.type, fetchMessages),
  ]);
  yield all([
    takeLatest(resourceActions.fetchMessage.request.type, fetchMessage),
  ]);
  yield all([
    takeLatest(resourceActions.createMessage.request.type, createMessage),
  ]);
  yield all([
    takeLatest(resourceActions.updateMessage.request.type, updateMessage),
  ]);
  yield all([
    takeLatest(resourceActions.deleteMessage.request.type, deleteMessage),
  ]);
  // ========================== LEARNING PATH ===============================
  yield all([
    takeLatest(
      resourceActions.fetchLearningPaths.request.type,
      fetchLearningPaths,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.fetchLearningPath.request.type,
      fetchLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.createLearningPath.request.type,
      createLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.updateLearningPath.request.type,
      updateLearningPath,
    ),
  ]);
  yield all([
    takeLatest(
      resourceActions.deleteLearningPath.request.type,
      deleteLearningPath,
    ),
  ]);
}

export default rootSaga;
