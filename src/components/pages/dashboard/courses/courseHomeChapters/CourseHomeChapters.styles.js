import styled from 'styled-components';
import media from '../../../../foundation/media';

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0 22px 22px;
  i {
    color: #0ec9b0;
  }
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0 22px 0;

  ${media.belowTabletLarge`
    margin: 25px 0 12px 10px;
  `}
`;

export default {
  ChapterWrapper,
  LessonWrapper,
};
