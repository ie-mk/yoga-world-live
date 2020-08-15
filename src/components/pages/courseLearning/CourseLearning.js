import React, { useState, useEffect, useMemo } from 'react';
import SectionTitle from '../../foundation/typography/SectionTitle';
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

var questions = [
  'Does these courses need any special requirements?',
  'Who are the authors of these courses?',
  'Is it possible to pay by instalments?',
  'Can I start an internship after I finish the course?',
  'What should I do after I finish the course?',
];

const CourseLearning = ({ courseId, dispatch, course }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    dispatch(resourceActions.fetchCourse.request(courseId));
  }, [courseId]);

  const [activeChapterIdx, setActiveChapterIdx] = useState(0);

  const chapters = (course && course.chapters) || {};

  const chaptersArr = useMemo(() => {
    return Object.keys(chapters)
      .map(key => {
        const chapterClone = { ...chapters[key] };
        chapterClone.id = key;

        return chapterClone;
      })
      .sort((a, b) => a.sequenceNr - b.sequenceNr);
  }, [course]);

  const lessonsArr = useMemo(
    () => {
      const activeChapter = chaptersArr[activeChapterIdx];
      const activeChapterLessons = activeChapter && activeChapter.lessons;
      if (!activeChapterLessons) return null;

      return Object.keys(activeChapterLessons)
        .map(lessonId => {
          const lessonsClone = { ...activeChapterLessons[lessonId] };
          lessonsClone.id = lessonId;
          return lessonsClone;
        })
        .sort((a, b) => a.sequenceNr - b.sequenceNr);
    },
    activeChapterIdx,
    chaptersArr,
  );

  const [activeLessonId, setActiveLessonId] = useState(null);

  useEffect(() => {
    if (!activeLessonId && lessonsArr.length) {
      setActiveLessonId(lessonsArr[0].id);
    }
  }, [lessonsArr]);

  console.log('-----lessonsArr', lessonsArr);

  // CONTINUE FROM HERE

  if (!course) return null;

  return (
    <CenteredFlexContainer>
      <SectionTitle
        margin="50px 0 20px 0"
        mediaConfig={{
          belowTabletLarge: {
            margin: '20px 0 0 0',
          },
        }}
        text={course.title}
      />

      <FlexContainer>
        <div>
          <Styled.ViewCourseMenuWrapper open={menuOpen}>
            <Styled.CourseMenu open={menuOpen}>
              <CardTitle text="Content" />
              {chapters &&
                Object.keys(chapters)
                  .reverse()
                  .map((chapterId, i) => {
                    return (
                      <CourseHomeChapters
                        key={chapterId}
                        chapterId={chapterId}
                        courseId={courseId}
                        chapters={chapters}
                      />
                    );
                  })}
            </Styled.CourseMenu>
          </Styled.ViewCourseMenuWrapper>
        </div>
        <Styled.ContentWrapper>
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
          <Styled.Lesson>
            <CardTitle margin="0 0 0 0" text="Lesson Title" />
            <Styled.DesktopVideoWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/0CvFEDZRa-o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Styled.DesktopVideoWrapper>
            <Styled.LessonContent>
              <CardTitle
                margin="76px 0 23px 0"
                mediaConfig={{
                  belowTabletLarge: {
                    margin: '38px 0 12px 0',
                  },
                }}
                text="What you will learn in this chapter"
              />
              <Text18 text={course.whatWillLearn} />
              <CardTitle
                margin="50px 0 29px 0"
                mediaConfig={{
                  belowTabletLarge: {
                    margin: '25px 0 15px 0',
                  },
                }}
                text="Please complete the following assignment"
              />
              <Styled.AssignmentWrapper>Assignment 03</Styled.AssignmentWrapper>
              <Styled.NoteWrapper>
                <Text18 color="#0EC9B0" text="NOTE:" fontWeight="700" />
                <Text18 text="Once the assignment is complete then only the lesson marked as finished." />
              </Styled.NoteWrapper>
              <Styled.ViewLessonWrapper>
                <CardTitle
                  mediaConfig={{
                    belowTabletLarge: {
                      margin: '0 0 39px  0',
                    },
                  }}
                  text="Frequently Asked Questions"
                />
                <Styled.AskWrapper>Ask a question?</Styled.AskWrapper>
              </Styled.ViewLessonWrapper>
            </Styled.LessonContent>
            {questions.map((key, index) => (
              <CollapseContainer
                title={questions[index]}
                isCollapsed={true}
                key={index}
              />
            ))}
            <Styled.RowContainer>
              <Styled.LessonMoveWrapper>
                <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
                <PathTitle margin="0 0 0 20px" text="Lesson 02 : Title" />
              </Styled.LessonMoveWrapper>
              <Styled.LessonMoveWrapper>
                <PathTitle margin="0 20px 0 0" text="Lesson 04 : Title" />
                <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
              </Styled.LessonMoveWrapper>
            </Styled.RowContainer>
          </Styled.Lesson>
        </Styled.ContentWrapper>
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default connect()(needsLoginWrapper(CourseLearning));
