import { handleActions } from 'redux-actions';
import { userActions, layoutActions, resourceActions } from './actions';
import { IS_SERVER } from '../constants';

export const getAsyncReducers = (
  action,
  resultProp,
  loadingProp = 'loading',
  errorProp = 'error',
) => {
  return ['request', 'success', 'error'].reduce((acc, type) => {
    acc[action[type]] = (state, action) => {
      const newState = { ...state };

      switch (type) {
        case (type = 'request'):
          newState[loadingProp] = true;
          break;

        case (type = 'success'):
          if (resultProp) {
            newState[resultProp] = {
              ...state[resultProp],
              ...action.payload,
            };
          }
          newState[loadingProp] = false;
          break;

        case (type = 'error'):
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

    // /*===============================================================*/
    // [userActions.fetchUserPermissions.success.type]: state => ({
    //   ...state,
    //   loading: true,
    // }),
    // [userActions.fetchUserPermissions.success.type]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   permissions: action.payload,
    // }),
    // [userActions.fetchUserPermissions.failure.type]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   fetchPermissionsError: action.payload,
    // }),
    ...getAsyncReducers(
      userActions.fetchUserPermissions,
      'permissions',
      'loading',
      'fetchPermissionsError',
    ),

    /*===============================================================*/

    // [userActions.fetchUserProfile.request.type]: state => ({
    //   ...state,
    //   loading: true,
    // }),
    // [userActions.fetchUserProfile.success.type]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   profile: action.payload,
    // }),
    // [userActions.fetchUserProfile.failure.type]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   fetchProfileError: action.payload,
    // }),

    ...getAsyncReducers(
      userActions.fetchUserProfile,
      'profile',
      'loading',
      'fetchProfileError',
    ),

    /*===============================================================*/

    // [userActions.updateUserProfile.request]: state => ({
    //   ...state,
    //   loading: true,
    // }),
    // [userActions.updateUserProfile.success]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   profile: action.payload,
    // }),
    // [userActions.updateUserProfile.failure]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   saveProfileError: action.payload,
    // }),

    ...getAsyncReducers(
      userActions.updateUserProfile,
      'profile',
      'loading',
      'saveProfileError',
    ),

    /*===============================================================*/

    // [userActions.updateUserProfilePicture.request]: state => ({
    //   ...state,
    //   loadingPicture: true,
    // }),
    // [userActions.updateUserProfilePicture.success]: state => ({
    //   ...state,
    //   loadingPicture: false,
    // }),
    // [userActions.updateUserProfilePicture.failure]: (state, action) => ({
    //   ...state,
    //   loadingPicture: false,
    //   saveProfilePictureError: action.payload,
    // }),

    ...getAsyncReducers(
      userActions.updateUserProfilePicture,
      null,
      'loadingPicture',
      'saveProfilePictureError',
    ),

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
    error: null,
    isFirstLogin: null,
  },
);

// if (!IS_SERVER) {
//   window.getAsyncReducers = getAsyncReducers;
//   window.resourceActions = resourceActions;
//   // console.log(
//   //   '-------getAsyncReducers(resourceActions.createCourse: ',
//   //   getAsyncReducers(resourceActions.createCourse, 'courses'),
//   // );
// }

export const courseReducer = handleActions(
  {
    ...getAsyncReducers(resourceActions.createCourse, 'data'),
    ...getAsyncReducers(resourceActions.updateCourse, 'data'),
    ...getAsyncReducers(resourceActions.deleteCourse, 'data'),
    ...getAsyncReducers(resourceActions.fetchCourse, 'data'),
    ...getAsyncReducers(resourceActions.fetchCourses, 'data'),
  },
  {
    data: {},
    loading: false,
  },
);

export const taskReducer = handleActions(
  {
    ...getAsyncReducers(resourceActions.createTask, 'data'),
    ...getAsyncReducers(resourceActions.updateTask, 'data'),
    ...getAsyncReducers(resourceActions.deleteTask, 'data'),
    ...getAsyncReducers(resourceActions.fetchTask, 'data'),
    ...getAsyncReducers(resourceActions.fetchTasks, 'data'),
  },
  {
    data: {},
    loading: false,
  },
);

export const messageReducer = handleActions(
  {
    ...getAsyncReducers(resourceActions.createMessage, 'data'),
    ...getAsyncReducers(resourceActions.updateMessage, 'data'),
    ...getAsyncReducers(resourceActions.deleteMessage, 'data'),
    ...getAsyncReducers(resourceActions.fetchMessage, 'data'),
    ...getAsyncReducers(resourceActions.fetchMessages, 'data'),
  },
  {
    data: {},
    loading: false,
  },
);

export const learningPathReducer = handleActions(
  {
    ...getAsyncReducers(resourceActions.createLearningPath, 'data'),
    ...getAsyncReducers(resourceActions.updateLearningPath, 'data'),
    ...getAsyncReducers(resourceActions.deleteLearningPath, 'data'),
    ...getAsyncReducers(resourceActions.fetchLearningPath, 'data'),
    ...getAsyncReducers(resourceActions.fetchLearningPaths, 'data'),
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
