import React, { useState, memo } from 'react';
import Styled from './CourseAddNew.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
//import { getUserProfileSelector, getUserSelector } from '../../store/selectors';
// import profileFormValidation from './profileForm.validation';
//import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';
// import { userActions } from '../../store/actions';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
const StyledError = styled.div`
  color: red;
`;

const difficultyarr = [
  { show: 'Choose difficulty', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const difficultyoptions = difficultyarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const durationarr = [
  { show: 'Set duration', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const durationoptions = durationarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const authorarr = [
  { show: 'Select Author', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const authoroptions = authorarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const categoryarr = [
  { show: 'Choose category', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const categoryoptions = categoryarr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

const learningpatharr = [
  { show: 'Choose a learning path', value: '' },
  { show: '1', value: '1' },
  { show: '2', value: '2' },
  { show: '3', value: '3' },
];
const pathoptions = learningpatharr.map(k => {
  return (
    <option key={k.show} value={k.value}>
      {k.show}
    </option>
  );
});

let CourseAddNew = () => {
  return (
    <ContainerBase
      paddingLeft="xxxl"
      paddingRight="xxxl"
      paddingBottom="xxxxxl"
    >
      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(userActions.updateUserProfile.request(values));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="courseTitle"
                type="text"
                label="Course Title"
                width="65%"
              />
              <AdminUploadImage width="30%" label="Thumbnail" />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminDropDown
                classNameString="select"
                name="difficulty"
                label="Difficulty"
                component="select"
                width="30%"
                placeholder="Choose Difficulty"
                options={difficultyoptions}
              />
              <AdminDropDown
                classNameString="select"
                name="duration"
                label="Duration"
                component="select"
                width="30%"
                placeholder="Set duration"
                options={durationoptions}
              />
              <AdminDropDown
                classNameString="select"
                name="author"
                label="Author"
                component="select"
                width="30%"
                placeholder="Select author"
                options={authoroptions}
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminDropDown
                classNameString="select"
                name="category"
                label="Category"
                component="select"
                width="30%"
                placeholder="Choose category"
                options={categoryoptions}
              />

              <AdminDropDown
                classNameString="select"
                name="learningpath"
                label="Learning path"
                component="select"
                width="30%"
                placeholder="Choose a learning path"
                options={pathoptions}
              />
              <AdminInput
                name="NumberOfChapters"
                type="text"
                label="Number of chapters"
                width="30%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="10"
                cols="110"
                component="textarea"
                label="What you will learn ?"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="10"
                cols="110"
                component="textarea"
                label="Pre-requisites ?"
                width="100%"
              />
            </Styled.InputRow>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  coursetitle: '',
  file: '',
  difficulty: '',
  duration: '',
  author: '',
  category: '',
  learningpath: '',
  NumberOfChapters: 2,
  learn: '',
  prerequisites: '',
};

export default CourseAddNew;
