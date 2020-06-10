import React, { useState } from 'react';
import Styled from './CourseLesson.styles';
import FlexContainer from '../../../../foundation/FlexContainer';
import ContainerBase from '../../../../foundation/ContainerBase';
import CourseLessonContent from './CourseLessonContent';
import CourseLessonHeader from './CourseLessonHeader';
import Button from '../../../../foundation/button/Button';
import { resourceActions } from '../../../../../store/actions';
import { connect } from 'react-redux';

let CourseLessonsContainer = ({ dispatch, data, chapterId, courseId }) => {
  const createLesson = () => {
    dispatch(resourceActions.createLesson.request(chapterId));
  };

  const [editableLessonId, setEditableLessonId] = useState(null);

  return (
    <Styled.Wrapper>
      <FlexContainer justifyContent="space-between">
        <ContainerBase width="40%">
          {Object.keys(data).map((lessonId, idx) => {
            const lesson = data[lessonId];

            return (
              <CourseLessonHeader
                key={lessonId}
                courseId={courseId}
                chapterId={chapterId}
                lessonId={lessonId}
                editableLessonId={editableLessonId}
                setEditableLessonId={setEditableLessonId}
                data={lesson}
                idx={idx}
              />
            );
          })}
          <Button
            onClick={createLesson}
            type="primary"
            fontSize="18px"
            borderRadius="sm"
            width="200px"
            margin="40px"
          >
            + Add Lesson
          </Button>
        </ContainerBase>
        <ContainerBase width="55%">
          {editableLessonId !== null ? (
            <CourseLessonContent
              chapterId={chapterId}
              lessonId={editableLessonId}
              setEditableLessonId={setEditableLessonId}
              data={data[editableLessonId]}
            />
          ) : null}
        </ContainerBase>
      </FlexContainer>
    </Styled.Wrapper>
  );
};

export default connect()(CourseLessonsContainer);
