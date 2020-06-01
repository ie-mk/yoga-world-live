import React, { useState, memo } from 'react';
import Styled from './NewLearningPath.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../../foundation/input/AdminInput';

import AdminTextArea from '../../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../../foundation/button/Button';

let NewLearningPath = ({ editTask, setEdit, setNewAdd }) => {
  const handleCancel = () => {
    setEdit(false);
    setNewAdd(false);
  };
  return (
    <Styled.ModalWrapper>
      <Styled.RowContainer>
        {editTask ? (
          <Styled.Title isStrong={true}>Edit Learning Path</Styled.Title>
        ) : (
          <Styled.Title isStrong={true}>New Learning Path</Styled.Title>
        )}
      </Styled.RowContainer>
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
                label="Learning Path Name"
                width="70%"
                backgroundColor="white"
              />
              <AdminUploadImage width="40%" label="Thumbnail" />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="10"
                cols="110"
                component="textarea"
                label="Learning Path Brief"
                width="100%"
                height="100px"
                backgroundColor="white"
              />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="5"
                cols="50"
                component="textarea"
                label="Skill Set( separate each skill with comma)"
                width="100%"
                height="100px"
                backgroundColor="white"
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              {editTask ? (
                <Button
                  type="primary"
                  width="200px"
                  borderRadius="sm"
                  height="45px"
                  size="sm"
                >
                  Update
                </Button>
              ) : (
                <Button
                  type="primary"
                  width="200px"
                  borderRadius="sm"
                  height="45px"
                  size="sm"
                >
                  Save
                </Button>
              )}
              <Button
                width="200px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => handleCancel()}
              >
                Cancel
              </Button>
            </Styled.ButtonWrapper>
          </form>
        )}
      </Formik>
    </Styled.ModalWrapper>
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

export default NewLearningPath;
