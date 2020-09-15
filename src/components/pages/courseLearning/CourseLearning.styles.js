import styled from 'styled-components';
import media from '../../foundation/media';
import { colors, spacing } from '../../../constants/styles';

export const NoteWrapper = styled.div`
  display: flex;
  margin: 65px 0 0 0;
  ${media.belowTabletLarge`
margin:35px 0 0 0;
`}
`;

export const AssignmentWrapper = styled.div`
  text-decoration: underline;
  color: #0ec9b0;
  font-size: 36px;
  font-style: Italic;
`;

export const AskWrapper = styled.div`
  text-decoration: underline;
  color: #0ec9b0;
  font-size: 24px;
`;

export const Lesson = styled.div`
  margin: 0 0 0 30px;
  ${media.belowTabletLarge`
  margin: 25px 0 0 0;

  `}
`;

export const LessonMoveWrapper = styled.div`
  display: flex;
  align-items: center;
  i {
    color: #0ec9b0;
  }
`;

const ViewLessonWrapper = styled.div`
  margin: 25px 0 15px 0;

  ${media.aboveTabletLarge`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `}
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 70px 0 44px 0;

  ${media.belowTabletLarge`
   margin:50px 0 22px 19px;
   `}
`;

const MobileVideoWrapper = styled.div`
  ${media.aboveTabletLarge`
      display:none;
   `}
`;
const DesktopVideoWrapper = styled.div`
  position: relative;
  margin-bottom: ${spacing.xl};
  margin-top: 30px;
`;

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 59px 0 44px 44px;
  i {
    color: #0ec9b0;
  }
`;

const LessonContent = styled.div`
  ${media.aboveTabletLarge`
  margin: 0 0 0 20px;
   `}
`;
const CheckBox = styled.input`
  width: 28px;
  height: 28px;

  ${media.belowTabletLarge`
   width: 14px;
      height: 14px;
     `}
`;

const ContentWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const ViewCourseMenuWrapper = styled.div`
  position: relative;
  margin-right: ${spacing.xl};
  width: ${({ open }) => (open ? '300px' : 0)};
  display: flex;
  transition: all 0.5s ease-in;
  justify-content: center;
  z-index: 1;
  color: ${colors.text.white};
  ${media.belowTabletLarge`
    position: absolute;
    margin-right: 0;
    width: ${({ open }) => (open ? '300px' : 0)};
    top: 150px;
    left: 0;
  `}
`;

export const MenuShowWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: -30px;
  background: #9dbe55 0% 0% no-repeat padding-box;
  width: 25px;
  height: 45px;
  border-radius: 0 5px 5px 0;
  padding: 10px 0 0 7px;
  transition: all 0.5s ease-in;
  z-index: 1;
  color: ${colors.text.white};
  i {
    font-size: 25px;
  }

  ${media.belowTabletLarge`
    margin-top: 0;
    top: 50px;
    left: ${({ open }) => (open ? '264px' : '-36px')};
    border-radius: 0 10px 10px 0;

  `}
`;

export const CourseMenu = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: ${({ open }) => (open ? '100%' : '0')};
  padding: 27px;
  background: #b4b2b0 0% 0% no-repeat padding-box;
  color: ${colors.text.white};
  border-radius: 10px;
  transition: all 0.5s ease-in;
  ${media.belowTabletLarge`
    padding: 15px 15px 20px 22px;
  `}
`;

export default {
  ContentWrapper,
  RowContainer,
  CourseMenu,
  CheckBox,
  ChapterWrapper,
  LessonWrapper,
  Lesson,
  AssignmentWrapper,
  AskWrapper,
  LessonMoveWrapper,
  MenuShowWrapper,
  LessonContent,
  MobileVideoWrapper,
  DesktopVideoWrapper,
  ViewLessonWrapper,
  ViewCourseMenuWrapper,
  NoteWrapper,
};
