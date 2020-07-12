import React, { useState, useEffect } from 'react';
import SectionTitle from '../../foundation/typography/SectionTitle';
import CardTitle from '../../foundation/typography/CardTitle';
import PathTitle from '../../foundation/typography/PathTitle';
import Text24 from '../../foundation/typography/Text24';
import { connect } from 'react-redux';

import Text18 from '../../foundation/typography/Text18';
import { spacing } from '../../../constants/styles';
import Styled from './CourseLearning.styles';
import CollapseContainer from '../collapaseContainer/CollapseContainer';
import FlexContainer from '../../foundation/FlexContainer';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import CourseHomeChapters from '../dashboard/courses/courseHomeChapters/CourseHomeChapters';
import { resourceActions } from '../../../store/actions';

const CustomText241 = props => (
  <Text24
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 0 24px',
      },
    }}
    {...props}
  />
);

var questions = [
  'Does these courses need any special requirements?',
  'Who are the authors of these courses?',
  'Is it possible to pay by instalments?',
  'Can I start an internship after I finish the course?',
  'What should I do after I finish the course?',
];

const CourseLearning = ({ courseId, dispatch, course }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const chapters = course.chapters;

  useEffect(() => {
    dispatch(resourceActions.fetchCourse.request(courseId));
  }, [courseId]);

  return (
    <CenteredFlexContainer>
      <SectionTitle
        margin="0 0 20px 0"
        mediaConfig={{
          belowTabletLarge: {
            margin: '0 0 10px 0',
          },
        }}
        text={course.title}
      />

      <FlexContainer>
        <div>
          <Styled.ViewCourseHomeWrapper open={menuOpen}>
            <Styled.CourseHome open={menuOpen}>
              <CardTitle text="Course Home" />
              {/* */}
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
            </Styled.CourseHome>
          </Styled.ViewCourseHomeWrapper>
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
            <CardTitle margin="0 0 55px 0" text="Lesson Title" />
            <Styled.DesktopVideoWrapper>
              <video width="100%" height="100%" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
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
              <Text18 text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum" />
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
                <i class="fa fa-angle-right fa-3x" aria-hidden="true" />
              </Styled.LessonMoveWrapper>
            </Styled.RowContainer>
          </Styled.Lesson>
        </Styled.ContentWrapper>
      </FlexContainer>
    </CenteredFlexContainer>
  );
};

export default connect()(CourseLearning);
