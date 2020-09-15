import React, { useState, useEffect, useMemo } from 'react';
import SectionTitle from '../../foundation/typography/SectionTitle';
import BodyText from '../../foundation/typography/BodyText';
import CardTitle from '../../foundation/typography/CardTitle';
import PathTitle from '../../foundation/typography/PathTitle';
import { connect } from 'react-redux';
import Text18 from '../../foundation/typography/Text18';
import Styled from './CourseLearning.styles';
import FlexContainer from '../../foundation/FlexContainer';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import CourseHomeChapters from '../dashboard/courses/courseHomeChapters/CourseHomeChapters';
import { resourceActions } from '../../../store/actions';
import CollapseContainer from '../../foundation/collapseContainer';
import Button from '../../foundation/button/Button';
import { useRouter } from 'next/router';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';
import {
  getChaptersByCourseId,
  getEditableCourseData,
  getEditingCourseId,
  getLessonsByChapterId,
} from '../../../store/selectors';

// var questions = [
//   'Does these courses need any special requirements?',
//   'Who are the authors of these courses?',
//   'Is it possible to pay by instalments?',
//   'Can I start an internship after I finish the course?',
//   'What should I do after I finish the course?',
// ];

const CourseLearning = ({
  courseId,
  dispatch,
  course,
  chaptersByCourse,
  lessonsByChapter,
}) => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!course) {
      dispatch(resourceActions.fetchCourse.request(courseId));
    }
  }, [courseId, course]);

  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request(courseId));
  }, [courseId]);

  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);

  const chapters = chaptersByCourse[courseId] || {};

  const lessonsArr = useMemo(() => {
    const activeChapterLessons =
      lessonsByChapter[Object.keys(chapters)[activeChapterIdx]];

    if (!activeChapterLessons) return null;

    return Object.keys(activeChapterLessons)
      .map(lessonId => {
        const lessonsClone = { ...activeChapterLessons[lessonId] };
        lessonsClone.id = lessonId;
        return lessonsClone;
      })
      .sort((a, b) => a.sequenceNr - b.sequenceNr);
  }, [activeChapterIdx, lessonsByChapter]);

  if (!course) return null;
  const activeLesson = lessonsArr && lessonsArr[activeLessonIdx];

  // const bla = course;
  // const b = courseId;
  // const lessArr = lessonsArr;
  // const chaptArr = chaptersArr;
  // const actIdx = activeLessonIdx;
  // const chapIdx = activeChapterIdx;
  // debugger;

  console.log('course--- ', course, 'activeLesson--', activeLesson);

  return (
    <CenteredFlexContainer width="100%" marginTop="xxl">
      <SectionTitle
        margin="50px 0 20px 0"
        mediaConfig={{
          belowTabletLarge: {
            margin: '20px 0 0 0',
          },
        }}
        text={course.title}
      />

      <FlexContainer width="100%">
        <div>
          <Styled.ViewCourseMenuWrapper open={menuOpen}>
            <Styled.CourseMenu open={menuOpen}>
              <CardTitle text="Course Home" />
              {chapters &&
                Object.keys(chapters)
                  .sort((a, b) => a.sequenceNr - b.sequenceNr)
                  .map((chapterId, idx) => {
                    return (
                      <CourseHomeChapters
                        key={chapterId}
                        chapterId={chapterId}
                        courseId={courseId}
                        chapters={chapters}
                        setActiveLessonIdx={setActiveLessonIdx}
                        activeLessonIdx={activeLessonIdx}
                        chapterIdx={idx}
                        setActiveChapterIdx={setActiveChapterIdx}
                        activeChapterIdx={activeChapterIdx}
                      />
                    );
                  })}
            </Styled.CourseMenu>
          </Styled.ViewCourseMenuWrapper>
        </div>
        <Styled.ContentWrapper>
          <Styled.Lesson>
            <Styled.MenuShowWrapper
              open={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <i className="fa fa-angle-left fa-4x" aria-hidden="true" />
              ) : (
                <i className="fa fa-angle-right fa-4x" aria-hidden="true" />
              )}
            </Styled.MenuShowWrapper>
            <CardTitle margin="0 0 0 0" text="Lesson Title" />
            <Styled.DesktopVideoWrapper>
              {activeLesson && activeLesson.videoLink ? (
                <iframe
                  width="100%"
                  height="400px"
                  src={activeLesson.videoLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : null}
            </Styled.DesktopVideoWrapper>

            <Styled.ViewLessonWrapper>
              <CardTitle
                mediaConfig={{
                  belowTabletLarge: {
                    margin: '0 0 39px  0',
                  },
                }}
                text="What you will learn in this lesson"
              />
            </Styled.ViewLessonWrapper>
            <BodyText color="#455325">
              {activeLesson && activeLesson.descr}
            </BodyText>
          </Styled.Lesson>
        </Styled.ContentWrapper>
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

const mapStateToProps = state => ({
  chaptersByCourse: getChaptersByCourseId(state),
  lessonsByChapter: getLessonsByChapterId(state),
});

export default connect(mapStateToProps)(needsLoginWrapper(CourseLearning));
