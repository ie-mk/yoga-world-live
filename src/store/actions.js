import { createAction } from 'redux-actions';
import { IS_SERVER } from '../constants';

const createAsyncAction = prefix =>
  ['request', 'success', 'failure'].reduce((acc, str) => {
    const type = `${prefix}/${str.toUpperCase()}`;
    acc[str] = createAction(type);
    acc[str].type = type;
    return acc;
  }, {});

export const userActions = {
  saveUserInfoFromLoginProvider: createAction(
    'SAVE_USER_INFO_FROM_LOGIN_PROVIDER',
  ),
  setLanguage: createAction('SET_LANGUAGE'),
  updateUserProfile: createAsyncAction('update-user-profile'),
  updateUserProfilePicture: createAsyncAction('update-user-profile-picture'),

  fetchUsers: createAsyncAction('fetch-users'),
  fetchUserProfile: createAsyncAction('fetch-user-profile'),
  fetchUserPermissions: createAsyncAction('fetch-user-permissions'),

  setIsFirstLogin: createAction('SET_IS_FIRST_LOGIN'),

  resetUser: createAction('RESET_USER'),
  adToFavourites: createAction('AD_TO_FAVOURITES'),
};

export const resourceActions = {
  createCourse: createAsyncAction('create-course'),
  updateCourse: createAsyncAction('update-course'),
  deleteCourse: createAsyncAction('delete-course'),
  fetchCourse: createAsyncAction('fetch-course'),
  fetchCourses: createAsyncAction('fetch-courses'),
  resetCourses: createAction('reset-courses'),
  setEditableCourseId: createAction('set-editing-course-id'),

  createChapter: createAsyncAction('create-chapter'),
  updateChapter: createAsyncAction('update-chapter'),
  deleteChapter: createAsyncAction('delete-chapter'),
  fetchChapter: createAsyncAction('fetch-chapter'),
  fetchChapters: createAsyncAction('fetch-chapters'),

  createTask: createAsyncAction('create-task'),
  updateTask: createAsyncAction('update-task'),
  deleteTask: createAsyncAction('delete-task'),
  fetchTask: createAsyncAction('fetch-task'),
  fetchTasks: createAsyncAction('fetch-tasks'),

  createMessage: createAsyncAction('create-message'),
  updateMessage: createAsyncAction('update-message'),
  deleteMessage: createAsyncAction('delete-message'),
  fetchMessage: createAsyncAction('fetch-message'),
  fetchMessages: createAsyncAction('fetch-messages'),

  createLearningPath: createAsyncAction('create-learning-path'),
  updateLearningPath: createAsyncAction('update-learning-path'),
  deleteLearningPath: createAsyncAction('delete-learning-path'),
  fetchLearningPath: createAsyncAction('fetch-learning-path'),
  fetchLearningPaths: createAsyncAction('fetch-learning-paths'),
};

if (!IS_SERVER) {
  window.resourceActions = resourceActions;
}

export const layoutActions = {
  setScrollFromTop: createAction('SET_SCROLL_FROM_TOP'),
};
