import { handleActions } from 'redux-actions';
import { userActions, layoutActions, resourceActions } from './actions';
import { IS_SERVER } from '../constants';
import { cloneDeep } from 'lodash';

export const getAsyncReducers = ({
  action,
  resultProp = 'data',
  loadingProp = 'loading',
  errorProp = 'error',
  exclude = {},
}) => {
  return ['request', 'success', 'failure']
    .filter(subAction => !exclude[subAction])
    .reduce((acc, subAction) => {
      acc[action[subAction]] = (state, action) => {
        const newState = { ...state };

        switch (subAction) {
          case (subAction = 'request'):
            newState[loadingProp] = true;
            break;

          case (subAction = 'success'):
            if (resultProp) {
              newState[resultProp] = {
                ...state[resultProp],
                ...action.payload,
              };
            }

            newState[loadingProp] = false;
            break;

          case (subAction = 'error'):
            newState[loadingProp] = false;
            newState[errorProp] = action.payload;
            break;
        }

        return newState;
      };

      return acc;
    }, {});
};

export const userReducer = handleActions(
  {
    [userActions.saveUserInfoFromLoginProvider]: (state, action) => ({
      ...state,
      loginProviderData: action.payload,
    }),
    [userActions.setLanguage]: (state, action) => ({
      ...state,
      userLanguage: action.payload,
    }),

    /*===============================================================*/
    [userActions.fetchUserPermissions.success.type]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.fetchUserPermissions.success.type]: (state, action) => ({
      ...state,
      loading: false,
      permissions: action.payload,
    }),
    [userActions.fetchUserPermissions.failure.type]: (state, action) => ({
      ...state,
      loading: false,
      fetchPermissionsError: action.payload,
    }),
    ...getAsyncReducers({
      action: userActions.fetchUserPermissions,
      resultProp: 'permissions',
      errorProp: 'fetchPermissionsError',
    }),

    /*===============================================================*/

    [userActions.fetchUserProfile.request.type]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.fetchUserProfile.success.type]: (state, action) => ({
      ...state,
      loading: false,
      profile: action.payload,
    }),
    [userActions.fetchUserProfile.failure.type]: (state, action) => ({
      ...state,
      loading: false,
      fetchProfileError: action.payload,
    }),

    ...getAsyncReducers({
      action: userActions.fetchUserProfile,
      resultProp: 'profile',
      errorProp: 'fetchProfileError',
    }),

    /*===============================================================*/

    [userActions.updateUserProfile.request]: state => ({
      ...state,
      loading: true,
    }),
    [userActions.updateUserProfile.success]: (state, action) => ({
      ...state,
      loading: false,
      profile: action.payload,
    }),
    [userActions.updateUserProfile.failure]: (state, action) => ({
      ...state,
      loading: false,
      saveProfileError: action.payload,
    }),

    ...getAsyncReducers({
      action: userActions.updateUserProfile,
      resultProp: 'profile',
      errorProp: 'saveProfileError',
    }),

    /*===============================================================*/

    [userActions.updateUserProfilePicture.request]: state => ({
      ...state,
      loadingPicture: true,
    }),
    [userActions.updateUserProfilePicture.success]: state => ({
      ...state,
      loadingPicture: false,
    }),
    [userActions.updateUserProfilePicture.failure]: (state, action) => ({
      ...state,
      loadingPicture: false,
      saveProfilePictureError: action.payload,
    }),

    ...getAsyncReducers({
      action: userActions.updateUserProfilePicture,
      loadingProp: 'loadingPicture',
      errorProp: 'saveProfilePictureError',
    }),

    /*===============================================================*/
    ...getAsyncReducers({
      action: userActions.fetchAllUsersPublicInfo,
      resultProp: 'allUsersPublicInfo',
    }),
    ...getAsyncReducers({
      action: userActions.updateUserPublicInfo,
      resultProp: 'allUsersPublicInfo',
    }),
    ...getAsyncReducers({
      action: userActions.fetchUserPublicInfo,
      exclude: { success: true },
      resultProp: 'allUsersPublicInfo',
    }),

    /*===============================================================*/
    ...getAsyncReducers({
      action: userActions.startCourse,
      loadingProp: 'startingCourseLoading',
      errorProp: 'startingCourseError',
    }),

    /*===============================================================*/

    [userActions.fetchUserPublicInfo.success.type]: (
      state,
      { payload: { uid, data } },
    ) => {
      const newState = {
        ...state,
        loading: false,
      };

      const allUsersPublicInfo = cloneDeep(state.allUsersPublicInfo);

      allUsersPublicInfo[uid] = data;

      newState.allUsersPublicInfo = allUsersPublicInfo;

      return newState;
    },

    /*===============================================================*/

    [userActions.adToFavourites]: (state, action) => ({
      ...state,
      favourites: {
        ...state.favourites,
        ...action.payload,
      },
    }),

    /*===============================================================*/

    [userActions.resetUser]: state => ({
      ...state,
      loginProviderData: {},
      profile: {},
      permissions: {},
    }),
    [userActions.setIsFirstLogin]: (state, action) => ({
      ...state,
      isFirstLogin: action.payload,
    }),
  },
  {
    loginProviderData: {},
    profile: {},
    permissions: {},
    loading: false,
    loadingPicture: false,
    startingCourseLoading: false,
    startingCourseError: null,
    error: null,
    isFirstLogin: null,
    allUsersPublicInfo: {},
  },
);

export const courseReducer = handleActions(
  {
    ...getAsyncReducers({ action: resourceActions.createCourse }),
    ...getAsyncReducers({ action: resourceActions.updateCourse }),
    ...getAsyncReducers({ action: resourceActions.deleteCourse }),
    ...getAsyncReducers({ action: resourceActions.fetchCourses }),
    ...getAsyncReducers({ action: resourceActions.fetchCourse }),

    [resourceActions.resetCourses]: state => ({
      ...state,
      data: {},
    }),

    [resourceActions.setEditableCourseId]: (state, { payload }) => ({
      ...state,
      editableCourseId: payload,
    }),

    [resourceActions.deleteCourseFromState]: (state, { payload }) => {
      const courses = { ...state.data };

      delete courses[payload];

      return {
        ...state,
        data: courses,
      };
    },

    //=================== COURSE CHAPTERS ===========================

    ...getAsyncReducers({ action: resourceActions.deleteChapter }),
    ...getAsyncReducers({ action: resourceActions.createChapter }),
    ...getAsyncReducers({ action: resourceActions.updateChapter }),

    ...getAsyncReducers({
      action: resourceActions.fetchChapters,
      resultProp: 'chapters',
    }),

    ...getAsyncReducers({
      action: resourceActions.fetchChapter,
      resultProp: 'chapters',
    }),

    [resourceActions.deleteChapterFromState]: (
      state,
      { payload: chapterId },
    ) => {
      const newState = {
        ...state,
        chapters: { ...state.chapters },
      };

      delete newState.chapters[chapterId];

      return newState;
    },

    //=================== COURSE LESSONS ===========================

    ...getAsyncReducers({ action: resourceActions.deleteLesson }),
    ...getAsyncReducers({ action: resourceActions.createLesson }),
    ...getAsyncReducers({ action: resourceActions.updateLesson }),
    ...getAsyncReducers({
      action: resourceActions.fetchLessons,
      resultProp: 'lessons',
    }),

    ...getAsyncReducers({
      action: resourceActions.fetchLesson,
      resultProp: 'lessons',
    }),

    [resourceActions.deleteLessonFromState]: (state, { payload: lessonId }) => {
      const newState = {
        ...state,
        lessons: { ...state.lessons },
      };

      delete newState.lessons[lessonId];

      return newState;
    },
  },
  {
    data: {},
    chapters: {},
    lessons: {},
    loading: false,
  },
);

export const taskReducer = handleActions(
  {
    ...getAsyncReducers({ action: resourceActions.createTask }),
    ...getAsyncReducers({ action: resourceActions.updateTask }),
    ...getAsyncReducers({ action: resourceActions.deleteTask }),
    ...getAsyncReducers({ action: resourceActions.fetchTask }),
    ...getAsyncReducers({ action: resourceActions.fetchTasks }),
  },
  {
    data: {},
    loading: false,
  },
);

export const messageReducer = handleActions(
  {
    ...getAsyncReducers({ action: resourceActions.createMessage }),
    ...getAsyncReducers({ action: resourceActions.updateMessage }),
    ...getAsyncReducers({ action: resourceActions.deleteMessage }),
    ...getAsyncReducers({ action: resourceActions.fetchMessage }),
    ...getAsyncReducers({ action: resourceActions.fetchMessages }),
  },
  {
    data: {},
    loading: false,
  },
);

export const learningPathReducer = handleActions(
  {
    ...getAsyncReducers({ action: resourceActions.createLearningPath }),
    ...getAsyncReducers({ action: resourceActions.updateLearningPath }),
    ...getAsyncReducers({ action: resourceActions.deleteLearningPath }),
    ...getAsyncReducers({ action: resourceActions.fetchLearningPath }),
    ...getAsyncReducers({ action: resourceActions.fetchLearningPaths }),

    [resourceActions.deleteLearningPathFromState]: (state, { payload }) => {
      const learningPaths = { ...state.data };

      delete learningPaths[payload];

      return {
        ...state,
        data: learningPaths,
      };
    },
  },
  {
    data: {},
    loading: false,
  },
);

export const layoutReducer = handleActions(
  {
    [layoutActions.setScrollFromTop]: (state, action) => ({
      ...state,
      scrollFromTop: action.payload,
    }),
  },
  {
    scrollFromTop: 0,
  },
);
