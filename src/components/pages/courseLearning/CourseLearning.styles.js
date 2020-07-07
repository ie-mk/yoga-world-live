import styled from 'styled-components';
import media from '../../foundation/media';
import { colors, spacing } from '../../../constants/styles';

export const CourseHome = styled.div`
  padding: 57px 30px 81px 91px;
  background-color: #1e2540;
  border-radius: 10px;
  width: 428px;
  ${media.belowTabletLarge`
     display:none;
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
  margin: 57px 0 0 0;
  ${media.belowTabletLarge`
  padding: 0px 200px 0 200px;
  `}
`;

export const LessonMoveWrapper = styled.div`
  display: flex;
  align-items: center;
  i {
    color: #0ec9b0;
  }
`;

export const MenuShowWrapper = styled.div`
  margin-top: 400px;
  background: transparent linear-gradient(180deg, #2385d9 0%, #0ec9b0 100%) 0%
    0% no-repeat padding-box;
  width: 49px;
  height: 70px;
  border-radius: 0 20px 20px 0;
  ${media.belowTabletLarge`
     margin-top:0;

  `}
`;

const RowContainer = styled.div`
  margin: 46px 0 27px 0;
  ${media.aboveTabletLarge`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 93px 0 54px 0;
  `}
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 70px 0 44px 0;

  ${media.belowTabletLarge`
   margin:0 0 22px 19px;
   `}
`;

const MobileVideoWrapper = styled.div`
  ${media.aboveTabletLarge`
      display:none;
   `}
`;
const DesktopVideoWrapper = styled.div`
  ${media.belowTabletLarge`
      display:none;
   `}
`;

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 59px 0 44px 44px;

  ${media.belowTabletLarge`
   margin:0 0 22px 19px;
   `}
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

export default {
  RowContainer,
  CourseHome,
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
};
