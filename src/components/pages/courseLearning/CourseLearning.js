import React from 'react';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import HeroTitle from '../../foundation/typography/HeroTitle';
import CardTitle from '../../foundation/typography/CardTitle';
import PathTitle from '../../foundation/typography/PathTitle';
import Text24 from '../../foundation/typography/Text24';
import Text18 from '../../foundation/typography/Text18';
import Grid from '../../foundation/Grid';
import { spacing } from '../../../constants/styles';
import Styled from './CourseLearning.styles';
import CollapseContainer from '../collapaseContainer/CollapseContainer';

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
var chapters = {
  'chapter 01': {
    title: 'title',
    lessons: {
      'Lesson 01': { title: 'Title' },
      'Lesson 02': { title: 'Title' },
      'Lesson 03': { title: 'Title' },
    },
  },
  'chapter 02': { title: 'title' },
  'chapter 03': { title: 'title' },
};

var questions = [
  'Does these courses need any special requirements?',
  'Who are the authors of these courses?',
  'Is it possible to pay by instalments?',
  'Can I start an internship after I finish the course?',
  'What should I do after I finish the course?',
];

const CourseLearning = () => (
  <CenteredFlexContainer>
    <HeroTitle margin="50px 0 50px 0" text="HTML,CSS & JAVA SCRIPT" />
    <CenteredFlexContainer>
      <Grid
        columns="1fr"
        marginBottom
        mediaConfig={{
          aboveTabletLarge: {
            'grid-template-columns': '0.5fr 1.5fr',
          },
          belowTabletLarge: {
            'grid-gap': spacing.xl,
          },
        }}
        gridGap={spacing.xl}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Styled.CourseHome>
              <CardTitle text="Course Home" />
              {Object.keys(chapters).map((chapterId, i) => {
                const chapter = chapters[chapterId];
                const title = chapterId + ' : ' + chapter.title;

                const lessons = chapters[chapterId].lessons;
                return (
                  <div>
                    <Styled.ChapterWrapper>
                      <Styled.CheckBox type="checkbox" />
                      <CustomText241 margin="0 0 0 20px" text={title} />
                    </Styled.ChapterWrapper>
                    {lessons &&
                      Object.keys(lessons).map((lessonId, i) => {
                        const lesson = lessons[lessonId];

                        const lessonTitle = lessonId + ' : ' + lesson.title;
                        return (
                          <Styled.LessonWrapper>
                            <Styled.CheckBox type="checkbox" />
                            <CustomText241
                              margin="0 0 0 20px"
                              text={lessonTitle}
                            />
                          </Styled.LessonWrapper>
                        );
                      })}
                  </div>
                );
              })}
            </Styled.CourseHome>
            <Styled.MenuShowWrapper>
              <div>
                <i className="fa fa-angle-left fa-4x" aria-hidden="true" />
              </div>
            </Styled.MenuShowWrapper>
          </div>
        </div>
        <div>
          <Styled.Lesson>
            <CardTitle margin="0 0 55px 0" text="Lesson Title" />

            <Styled.DesktopVideoWrapper>
              <video width="700" height="500" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </Styled.DesktopVideoWrapper>
            <Styled.MobileVideoWrapper>
              <video width="350" height="250" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
                Your browser does not support HTML video.
              </video>
            </Styled.MobileVideoWrapper>

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
              <div>
                <Text18
                  margin="65px 0 0 0"
                  mediaConfig={{
                    belowTabletLarge: {
                      margin: '33px 0 0 0',
                    },
                  }}
                  text="NOTE : Once the assignment is complete then only the lesson marked as finished."
                />
              </div>
              <Styled.RowContainer>
                <CardTitle
                  mediaConfig={{
                    belowTabletLarge: {
                      margin: '0 0 39px  0',
                    },
                  }}
                  text="Frequently Asked Questions"
                />
                <Styled.AskWrapper>Ask a question?</Styled.AskWrapper>
              </Styled.RowContainer>
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
        </div>
      </Grid>
    </CenteredFlexContainer>
  </CenteredFlexContainer>
);

export default CourseLearning;
