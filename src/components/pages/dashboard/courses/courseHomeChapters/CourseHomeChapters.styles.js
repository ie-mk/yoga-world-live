import styled from 'styled-components';
import media from '../../../../foundation/media';
import { lightenDarkenColor } from '../../../../../utils/colors';

const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0 12px 12px;
  i {
    color: #7d8c5b;
  }
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#c1d398' : '')};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
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
