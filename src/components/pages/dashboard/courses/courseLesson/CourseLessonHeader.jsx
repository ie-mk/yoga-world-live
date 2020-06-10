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
  courseId,
  chapterId,
  lessonId,
  idx,
  editableLessonId,
  setEditableLessonId,
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

  const editing = editableLessonId === lessonId;

  return (
    <FlexContainer
      justifyContent="space-between"
      padding={spacing.lg}
      alignItems="center"
      border={editing ? '2px dashed gray' : 'inherit'}
    >
      <Styled.LessonNumber editing={editing}>{`Lesson ${idx +
        1}`}</Styled.LessonNumber>
      <div>
        {editing ? (
          <></>
        ) : (
          <>
            <CustomButton
              margin="0 20px 0 0"
              onClick={() => setEditableLessonId(lessonId)}
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
