import React, { useState } from 'react';
import Styled from './CourseLesson.styles';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../foundation/button/Button';
import { Formik, ErrorMessage, Field } from 'formik';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';
import FlexContainer from '../../../../foundation/FlexContainer';
import { spacing } from '../../../../../constants/styles';

const CustomButton = props => (
  <Button
    type="action"
    fontSize="18px"
    borderRadius="sm"
    margin="0 20px 0 0"
    padding="10px 30px"
    {...props}
  >
    {props.children}
  </Button>
);

const CourseLessonContent = ({
  dispatch,
  setEditableLessonId,
  data,
  chapterId,
  lessonId,
}) => {
  const initialFormValues = {
    title: '',
    descr: '',
    videoLink: '',
    assignment: '',
  };

  return (
    <Styled.LessonContent>
      <Formik
        initialValues={{ ...initialFormValues, ...data }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            resourceActions.updateLesson.request({
              chapterId,
              lessonId,
              data: values,
            }),
          );

          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.LessonFormContainer>
              <AdminInput
                name="title"
                type="text"
                label="Lesson Title"
                placeholder="Lesson Title"
                width="100%"
                backgroundColor="white"
              />
              <AdminTextArea
                name="descr"
                rows="5"
                cols="10"
                component="textarea"
                placeholder="Lesson Breif"
                label="Lesson Breif"
                width="100%"
                backgroundColor="white"
              />
              <ContainerBase flexDirection="row" display="flex">
                <AdminInput
                  name="videoLink"
                  type="text"
                  label="Video Link"
                  placeholder="video link"
                  backgroundColor="white"
                  width="70%"
                />
                <Styled.Upload marginTop="xxl">upload</Styled.Upload>
              </ContainerBase>
              <AdminInput
                name="assignment"
                type="text"
                label="Practice Page Link/Assignment"
                placeholder="Assignment"
                backgroundColor="white"
                width="100%"
              />
              <FlexContainer
                justifyContent="flex-end"
                margin={`${spacing.md} 0`}
              >
                <CustomButton onClick={() => setEditableLessonId(null)}>
                  Cancel
                </CustomButton>
                <CustomButton
                  type="primary"
                  onClick={handleSubmit}
                  margin="null"
                >
                  Save
                </CustomButton>
              </FlexContainer>
            </Styled.LessonFormContainer>
          </form>
        )}
      </Formik>
    </Styled.LessonContent>
  );
};

export default connect()(CourseLessonContent);
