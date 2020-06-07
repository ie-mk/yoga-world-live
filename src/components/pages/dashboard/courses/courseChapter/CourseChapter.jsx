import React from 'react';
import { connect } from 'react-redux';
import Styled from './CourseChapter.styles';
import CourseLesson from '../courseLesson/CourseLesson';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import { resourceActions } from '../../../../../store/actions';

const CourseChapter = ({ dispatch, chapterId, data }) => {
  const handleChapterDelete = () => {
    if (confirm('Are you sure you want to delete this chapter?')) {
      dispatch(resourceActions.deleteChapter.request(chapterId));
    }
  };

  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl" paddingBottom="xxxxl">
      <Styled.ChapterHeader>
        {' '}
        Chapter
        <Styled.DeleteChapterButton onClick={handleChapterDelete}>
          Delete <i className="fa fa-close" />
        </Styled.DeleteChapterButton>
      </Styled.ChapterHeader>

      <Formik
        initialValues={{ ...initialFormValues, ...data }}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(resourceActions.updateChapter.request(values));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="title"
                type="text"
                label="Chapter title"
                placeholder="Enter chapter title"
                width="46.5%"
              />
              <AdminInput
                name="numberOfLessons"
                type="text"
                label="Number of Lessons"
                width="46.5%"
              />
            </Styled.InputRow>
            {/*{Object.keys(data.lessons)}*/}
            <CourseLesson />
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  title: '',
  numberOfLessons: '',
  lessons: {},
};

export default connect()(CourseChapter);
