import { createSelector } from 'reselect';

export const getUserSelector = state => state.user;

export const getUID = state =>
  state.user &&
  state.user.loginProviderData &&
  state.user.loginProviderData.uid;

export const getPermissions = state => state.user.permissions;

export const getCourses = state => state.courses.data;
