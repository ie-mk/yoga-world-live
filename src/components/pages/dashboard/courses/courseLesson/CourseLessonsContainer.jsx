import React, { useState } from 'react';
import Styled from './CourseLesson.styles';
import FlexContainer from '../../../../foundation/FlexContainer';
import ContainerBase from '../../../../foundation/ContainerBase';
import CourseLessonContent from './CourseLessonContent';
import CourseLessonHeader from './CourseLessonHeader';

let CourseLessonsContainer = ({ dispatch, data, chapterId }) => {
  return (
    <Styled.Wrapper>
      <FlexContainer justifyContent="space-between">
        <ContainerBase width="35%">
          {Object.keys(data).map(lessonId => {
            const lesson = data[lessonId];

            return <CourseLessonHeader key={lessonId} data={lesson} />;
          })}
        </ContainerBase>
        <ContainerBase width="60%">
          <CourseLessonContent />
        </ContainerBase>
      </FlexContainer>
    </Styled.Wrapper>
  );
};

export default CourseLessonsContainer;
