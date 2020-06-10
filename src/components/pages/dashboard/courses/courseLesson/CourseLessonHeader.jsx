import React, { useState } from 'react';
import Styled from './CourseLesson.styles';

import Button from '../../../../foundation/button/Button';
import FlexContainer from '../../../../foundation/FlexContainer';
import { spacing } from '../../../../../constants/styles';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';

const CustomButton = props => (
  <Button
    type="action"
    fontSize="18px"
    borderRadius="sm"
    margin="0 20px 0 0"
    {...props}
  >
    {props.children}
  </Button>
);

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

  const editing = activeLesson === idx;

  return (
    <FlexContainer
      justifyContent="space-between"
      padding={spacing.lg}
      alignItems="center"
      border={editing ? '2px dashed gray' : 'inherit'}
    >
      <Styled.LessonNumber>{`Lesson ${idx + 1}`}</Styled.LessonNumber>
      <div>
        {editing ? (
          <>
            <CustomButton onClick={() => setActiveLesson(idx)}>
              Cancel
            </CustomButton>
            <CustomButton type="primary" onClick={deleteLesson} margin="null">
              Save
            </CustomButton>
          </>
        ) : (
          <>
            <CustomButton
              margin="0 20px 0 0"
              onClick={() => setActiveLesson(idx)}
            >
              Edit
            </CustomButton>
            <CustomButton onClick={deleteLesson} margin="null">
              Delete
            </CustomButton>
          </>
        )}
      </div>
    </FlexContainer>
  );
};

export default connect()(CourseLessonHeader);
