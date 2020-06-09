import React, { useState } from 'react';
import Styled from './CourseLesson.styles';

import Button from '../../../../foundation/button/Button';
import FlexContainer from '../../../../foundation/FlexContainer';
import { spacing } from '../../../../../constants/styles';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';

let CourseLessonHeader = ({
  dispatch,
  data,
  courseId,
  chapterId,
  lessonId,
  idx,
  activeLesson,
  setActiveLesson,
}) => {
  const deleteLesson = () => {
    if (confirm('Are you sure you want to delete this lesson?')) {
      dispatch(
        resourceActions.deleteLesson.request({
          courseId,
          chapterId,
          lessonId,
        }),
      );
    }
  };

  return (
    <FlexContainer
      justifyContent="space-between"
      padding={spacing.lg}
      alignItems="center"
    >
      <Styled.LessonNumber>
        <input
          onClick={() => setActiveLesson(idx)}
          type="checkbox"
          checked={activeLesson === idx}
        />
        {`Lesson ${idx + 1}`}
      </Styled.LessonNumber>
      <div>
        <Button
          type="action"
          fontSize="18px"
          borderRadius="sm"
          margin="0 20px 0 0"
        >
          Edit
        </Button>
        <Button
          onClick={deleteLesson}
          type="action"
          fontSize="18px"
          borderRadius="sm"
          margin="null"
        >
          Delete
        </Button>
      </div>
    </FlexContainer>
  );
};

export default connect()(CourseLessonHeader);
