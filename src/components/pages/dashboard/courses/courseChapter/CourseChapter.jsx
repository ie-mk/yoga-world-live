import React from 'react';
import { connect } from 'react-redux';
import Styled from './CourseChapter.styles';
import CourseLesson from '../courseLesson/CourseLesson';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import { resourceActions } from '../../../../../store/actions';
import Button from '../../../../foundation/button/Button';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import FlexContainer from '../../../../foundation/FlexContainer';

const CourseChapter = ({ dispatch, chapterId, data, idx }) => {
  const handleChapterDelete = () => {
    if (confirm('Are you sure you want to delete this chapter?')) {
      dispatch(resourceActions.deleteChapter.request(chapterId));
    }
  };

  console.log('----chapter data: ', data);

  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl" paddingBottom="xxxxl">
      <Styled.ChapterHeader>
        Chapter {idx + 1}
        <Styled.DeleteChapterButton onClick={handleChapterDelete}>
          Delete <i className="fa fa-close" />
        </Styled.DeleteChapterButton>
      </Styled.ChapterHeader>

      <Formik
        initialValues={{ ...initialFormValues, ...data }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(
            resourceActions.updateChapter.request({
              chapterId,
              data: values,
            }),
          );
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
                //placeholder="Enter chapter title"
                width="28%"
              />
              <AdminInput
                name="sequenceNr"
                type="number"
                label="Sequence Nr"
                //placeholder="Enter chapter title"
                width="28%"
              />
              <AdminInput
                name="numberOfLessons"
                type="text"
                label="Number of Lessons"
                width="28%"
              />
            </Styled.InputRow>
            {/*{Object.keys(data.lessons)}*/}
            {/*<CourseLesson />*/}
            <FlexContainer justifyContent="flex-end" marginTop="xxl">
              <Button type="button" size="lg" onClick={handleSubmit}>
                Update Chapter
              </Button>
            </FlexContainer>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  title: '',
  numberOfLessons: '',
  sequenceNr: '',
};

export default connect()(CourseChapter);
