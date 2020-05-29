import React, { useState, memo } from 'react';
import Styled from './CourseChapter01.styles';
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
import Button from '../../../../foundation/button/Button';

let CourseAddNew = () => {
  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl">
      <Styled.ChapterHeader> Chapter-01</Styled.ChapterHeader>

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
                name="chapter01Title"
                type="text"
                label="Chapter 01 Title"
                placeholder="Enter chapter title"
                width="100%"
              />
              <AdminInput
                name="numberoflessons"
                type="text"
                label="Number of Lessons"
                width="100%"
              />
            </Styled.InputRow>
            <Styled.MidContainer>
              <Styled.AddLesson></Styled.AddLesson>
              <Styled.LessonFormContainer>
                <AdminInput
                  name="chapter01Title"
                  type="text"
                  label="Lesson Title"
                  //  placeholder="Enter chapter title"
                  width="100%"
                />
                <AdminTextArea
                  name="learn"
                  rows="5"
                  cols="10"
                  component="textarea"
                  placeholder="Lesson Breif"
                  label="Lesson Breif"
                  width="100%"
                />
                <Styled.Row>
                  <AdminInput
                    name="chapter01Title"
                    type="text"
                    label="Video Link"
                    //  placeholder="Enter chapter title"
                    width="70%"
                  />
                  <Styled.Upload>upload</Styled.Upload>
                </Styled.Row>
                <AdminInput
                  name="chapter01Title"
                  type="text"
                  label="Practice Page Link/Assignment"
                  //  placeholder="Enter chapter title"
                  width="100%"
                />
              </Styled.LessonFormContainer>
            </Styled.MidContainer>
            <Styled.InputRow></Styled.InputRow>
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
