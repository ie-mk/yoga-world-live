import React, { useState, memo, useEffect } from 'react';
import Styled from './NewLearningPath.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../../foundation/input/AdminInput';

import AdminTextArea from '../../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../../foundation/button/Button';
import { resourceActions } from '../../../../../../store/actions';
import AdminDropDown from '../../../../../foundation/dropdown/AdminDropDown';
import { LEARNING_PATH_OPTIONS } from '../../../../../../constants';

const initialFormValues = {
  title: '',
  descr: '',
  skillSet: '',
};

let NewLearningPath = ({
  dispatch,
  editPath,
  setEdit,
  setAddingNew,
  ediTableLearningPathId,
  learningPaths,
}) => {
  const handleCancel = () => {
    setEdit(false);
    setAddingNew(false);
  };

  return (
    <Styled.ModalWrapper>
      <Styled.RowContainer>
        {editPath ? (
          <Styled.Title isStrong={true}>Edit Learning Path</Styled.Title>
        ) : (
          <Styled.Title isStrong={true}>New Learning Path</Styled.Title>
        )}
      </Styled.RowContainer>
      <Formik
        initialValues={{
          ...initialFormValues,
          ...learningPaths[ediTableLearningPathId],
        }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            editPath
              ? resourceActions.updateLearningPath.request({
                  docId: ediTableLearningPathId,
                  data: values,
                })
              : resourceActions.createLearningPath.request({ data: values }),
          );
          setTimeout(() => {
            setSubmitting(false);
            setEdit(false);
            setAddingNew(false);
          }, 100);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminDropDown
                classNameString="select"
                name="title"
                label="Learning path"
                component="select"
                width="50%"
                placeholder="Choose a learning path"
                options={LEARNING_PATH_OPTIONS}
              />
              <AdminUploadImage width="40%" label="Thumbnail" />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="descr"
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
                name="skillSet"
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
              {editPath ? (
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

const mapStateToProps = state => ({
  learningPaths: state.learningPaths.data,
});

export default connect(mapStateToProps)(NewLearningPath);
