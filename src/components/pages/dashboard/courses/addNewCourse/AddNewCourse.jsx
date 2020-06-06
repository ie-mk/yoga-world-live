import React, { useEffect } from 'react';
import CourseDescription from '../courseDesctiption/CourseDescription';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import {
  getEditableCourseData,
  getCourseChapters,
} from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';

const AddNewCourse = ({ dispatch, courseData }) => {
  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request());
  }, []);

  const handleCreateNewChapter = () => {
    dispatch(resourceActions.createChapter.request());
  };

  const chapters = courseData.chapters;

  return (
    <ContainerBase>
      <CourseDescription />
      {chapters &&
        Object.keys(chapters).map(chapterId => {
          const data = chapters[chapterId];
          return <CourseChapter chapterId={chapterId} data={data} />;
        })}
      <CenteredFlexContainer margin="lg">
        <Button type="primary" size="lg" onClick={handleCreateNewChapter}>
          Add New Chapter
        </Button>
      </CenteredFlexContainer>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  courseData: getEditableCourseData(state),
});

export default connect(mapStateToProps)(AddNewCourse);
