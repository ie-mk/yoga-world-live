import { createSelector } from 'reselect';

export const getUserSelector = state => state.user;

export const getUID = state =>
  state.user &&
  state.user.loginProviderData &&
  state.user.loginProviderData.uid;

export const getPermissions = state => state.user.permissions;

export const getCourses = state => state.courses.data;

export const getEditingCourseId = state => state.courses.editableCourseId;

export const getEditableCourseData = createSelector(
  getCourses,
  getEditingCourseId,
  (courses, editableCourseId) => {
    return courses[editableCourseId] || {};
  },
);

export const getCourseChapters = state => state.courses.chapters;

export const isStaff = state =>
  state.user.permissions.data &&
  (state.user.permissions.data.admin || state.user.permissions.data.author);

export const getLearningPaths = state => state.learningPaths.data;
