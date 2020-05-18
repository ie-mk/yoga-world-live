import { createAction } from 'redux-actions';

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
  fetchUserProfile: createAsyncAction('fetch-user-profile'),
  fetchUserPermissions: createAsyncAction('fetch-user-permissions'),

  setIsFirstLogin: createAction('SET_IS_FIRST_LOGIN'),

  resetUser: createAction('RESET_USER'),
  adToFavourites: createAction('AD_TO_FAVOURITES'),
};

export const layoutActions = {
  setScrollFromTop: createAction('SET_SCROLL_FROM_TOP'),
};
