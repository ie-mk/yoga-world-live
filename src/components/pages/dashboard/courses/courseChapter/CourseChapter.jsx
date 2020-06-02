import React from 'react';
import Styled from './CourseChapter.styles';
import CourseLesson from '../courseLesson/CourseLesson';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../foundation/button/Button';
import { Formik, ErrorMessage, Field } from 'formik';

const CourseChapter = () => {
  // return <Styled.Wrapper>Course chapter</Styled.Wrapper>;
  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl" paddingBottom="xxxxl">
      <Styled.ChapterHeader> Chapter</Styled.ChapterHeader>

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
                width="46.5%"
              />
              <AdminInput
                name="numberoflessons"
                type="text"
                label="Number of Lessons"
                width="46.5%"
              />
            </Styled.InputRow>
            <CourseLesson />
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

export default CourseChapter;
