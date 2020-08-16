import styled from 'styled-components';
import media from '../../../../foundation/media';

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 12px 12px;
  i {
    color: #0ec9b0;
  }
`;

const ChapterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 7px 0;

  ${media.belowTabletLarge`
    margin: 18px 0 5px 10px;
  `}
`;

export default {
  ChapterWrapper,
  LessonWrapper,
};
