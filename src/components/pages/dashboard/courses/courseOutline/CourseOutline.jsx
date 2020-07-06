import React, { useEffect } from 'react';
import ExpandableContainer from '../../../../foundation/expandableContainer';
import CollapseContainer from '../../../../foundation/collapseContainer';

import styled from 'styled-components';
import Styled from './CourseOutline.styles';
import ContainerBase from '../../../../foundation/ContainerBase';
import { resourceActions } from '../../../../../store/actions';

// var chapters = {
//   'chapter 01': { title: 'Introduction' },
//   'chapter 02': { title: 'Introduction' },
//   'chapter 03': { title: 'Introduction' },
//   'chapter 04': { title: 'Introduction' },
// };

var lessons = {
  'Lesson 01': { title: 'First Lesson', duration: '07:28' },
  'Lesson 02': { title: 'Second Lesson', duration: '12:48' },
  'Lesson 03': { title: 'Third Lesson', duration: '12:48' },
  'Lesson 04': { title: 'Fourth Lesson', duration: '12:48' },
};

const CourseOutline = ({ dispatch, chapters, courseId }) => {
  // const CourseChapter = ({ dispatch, courseId, chapterId, data, idx }) => {

  useEffect(() => {
    dispatch(
      resourceActions.fetchLessons.request({
        courseId,
        // chapterId,
      }),
    );
  }, []);

  // const lessons = data.lessons;

  return (
    <Styled.Wrapper>
      <Styled.StyledHeader>Course Outline</Styled.StyledHeader>
      <ContainerBase marginTop="xl">
        {chapters &&
          Object.keys(chapters)
            .reverse()
            .map((chapterId, i) => {
              const chapter = chapters[chapterId];
              const title =
                'Chapter ' + chapter.sequenceNr + ' : ' + chapter.title;
              return (
                <CollapseContainer title={title} isCollapsed={true} key={i}>
                  <Styled.ItemsContainer>
                    {chapters.lessons &&
                      Object.keys(chapters.lessons).map((lessonId, i) => {
                        const lesson = lessons[lessonId];
                        const title =
                          'Lesson ' + lesson.sequenceNr + ' : ' + lesson.title;
                        return (
                          <Styled.ContentWrapper key={i}>
                            <div>{title}</div>
                            <div>{lesson.videoLink}</div>
                          </Styled.ContentWrapper>
                        );
                      })}
                  </Styled.ItemsContainer>
                </CollapseContainer>
              );
            })}
      </ContainerBase>
    </Styled.Wrapper>
  );
};

export default CourseOutline;
