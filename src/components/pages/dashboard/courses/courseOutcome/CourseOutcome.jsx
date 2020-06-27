import React from 'react';
import ExpandableContainer from '../../../../foundation/expandableContainer';
import styled from 'styled-components';
import Styled from './CourseOutCome.styles';
import ContainerBase from '../../../../foundation/ContainerBase';

var chapters = {
  'chapter 01': { title: 'Introduction' },
  'chapter 02': { title: 'Introduction' },
  'chapter 03': { title: 'Introduction' },
  'chapter 04': { title: 'Introduction' },
};

var lessons = {
  'Lesson 01': { title: 'First Lesson', duration: '07:28' },
  'Lesson 02': { title: 'Second Lesson', duration: '12:48' },
  'Lesson 03': { title: 'Third Lesson', duration: '12:48' },
  'Lesson 04': { title: 'Fourth Lesson', duration: '12:48' },
};

const CourseOutcome = () => (
  <Styled.Wrapper>
    <Styled.StyledHeader>Course Outline</Styled.StyledHeader>
    <ContainerBase marginTop="xl">
      {chapters &&
        Object.keys(chapters).map((chapterId, i) => {
          const chapter = chapters[chapterId];
          const title = chapterId + ' : ' + chapter.title;
          return (
            <ExpandableContainer title={title} isCollapsed={true} key={i}>
              {lessons &&
                Object.keys(lessons).map((lessonId, i) => {
                  const lesson = lessons[lessonId];
                  const title = lessonId + ' : ' + lesson.title;
                  return (
                    <Styled.ContentWrapper key={i}>
                      <div>{title}</div>
                      <div>{lesson.duration}</div>
                    </Styled.ContentWrapper>
                  );
                })}
            </ExpandableContainer>
          );
        })}
    </ContainerBase>
  </Styled.Wrapper>
);

export default CourseOutcome;
