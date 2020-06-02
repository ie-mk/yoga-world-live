import React, { useState, memo } from 'react';
import Styled from './CourseDescription.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import styled from 'styled-components';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../foundation/button/Button';
import { spacing } from '../../../../../constants/styles';
import { getEditableCourseData } from '../../../../../store/selectors';

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

let CourseDescription = ({ dispatch, editableCourseData }) => {
  console.log('-------editableCourseData: ', editableCourseData);

  return (
    <ContainerBase
      paddingLeft="xxxl"
      paddingRight="xxxl"
      paddingBottom="xxxxxl"
    >
      <Formik
        initialValues={editableCourseData}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(resourceActions.updateCourse.request({ data: values }));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="title"
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
                label="author"
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
                name="whatWillLearn"
                rows="10"
                cols="110"
                component="textarea"
                label="What you will learn ?"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="prerequisites"
                rows="10"
                cols="110"
                component="textarea"
                label="Pre-requisites ?"
                width="100%"
              />
            </Styled.InputRow>
            <ContainerBase
              display="flex"
              justifyContent="flex-end"
              marginTop={spacing.md}
            >
              <Button
                type="primary"
                fontSize="18px"
                borderRadius="sm"
                width="300px"
                submit="true"
                onClick={handleSubmit}
              >
                Update Description
              </Button>
            </ContainerBase>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  title: '',
  file: '',
  difficulty: '',
  duration: '',
  author: '',
  category: '',
  learningPath: '',
  whatWillLearn: '',
  prerequisites: '',
};

const mapStateToProps = state => ({
  editableCourseData: { ...initialFormValues, ...getEditableCourseData(state) },
});

export default connect(mapStateToProps)(CourseDescription);
