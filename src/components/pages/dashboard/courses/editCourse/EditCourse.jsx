import React, { useEffect, useState } from 'react';
import CourseDescription from '../courseDesctiption/CourseDescription';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import {
  getChaptersByCourseId,
  getEditableCourseData,
  getEditingCourseId,
} from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SpinnerLarge from '../../../../foundation/spinner/SpinnerLarge';

const EditCourse = ({
  dispatch,
  courseId,
  courseData,
  loading,
  chaptersByCourse,
}) => {
  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request(courseId));
  }, []);

  const [forceDescriptionSubmit, setForceDescriptionSubmit] = useState(false);

  const chapters = chaptersByCourse[courseId] || {};
  const editedOnDate = courseData && courseData.editedOnDate;

  const handleCreateNewChapter = () => {
    setForceDescriptionSubmit(true);

    setTimeout(() => {
      setForceDescriptionSubmit(false);
      dispatch(
        resourceActions.createChapter.request({
          sequenceNr: Object.keys(chapters).length + 1,
        }),
      );
    }, 500);
  };

  return (
    <ContainerBase key={editedOnDate && editedOnDate.seconds}>
      {loading && <SpinnerLarge />}
      <CourseDescription forceDescriptionSubmit={forceDescriptionSubmit} />
      {chapters &&
        Object.keys(chapters)
          .sort(
            (a, b) => chapters[a].sequenceNr - (chapters[b].sequenceNr || 999),
          )
          .map((chapterId, idx) => {
            const data = chapters[chapterId];
            return (
              <CourseChapter
                key={chapterId}
                courseId={courseId}
                chapterId={chapterId}
                data={data}
                idx={idx}
              />
            );
          })}
      <CenteredFlexContainer margin="lg">
        <Button
          type="primary"
          size="lg"
          data-test="add-new-chapter"
          onClick={handleCreateNewChapter}
        >
          Add New Chapter
        </Button>
      </CenteredFlexContainer>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  courseData: getEditableCourseData(state),
  loading: state.courses.loading,
  courseId: getEditingCourseId(state),
  chaptersByCourse: getChaptersByCourseId(state),
});

export default connect(mapStateToProps)(EditCourse);
