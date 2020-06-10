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

  const [editMode, setEditMode] = useState(false);
  const [activeLessonId, setActiveLessonId] = useState(Object.keys(data)[0]);

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
                editMode={editMode}
                setEditMode={setEditMode}
                activeLessonId={activeLessonId}
                setActiveLessonId={setActiveLessonId}
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
          {activeLessonId !== null ? (
            <CourseLessonContent
              chapterId={chapterId}
              activeLessonId={activeLessonId}
              setActiveLessonId={setActiveLessonId}
              data={data[activeLessonId]}
              editMode={editMode}
              setEditMode={setEditMode}
            />
          ) : null}
        </ContainerBase>
      </FlexContainer>
    </Styled.Wrapper>
  );
};

export default connect()(CourseLessonsContainer);
