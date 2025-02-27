import styled, { css } from 'styled-components';
import getMedia from '../../utils/media';

/*
 * "width: 100%" added to cover some edge cases when grid is not taking full
 * available space depending on the parent container CSS
 */
// @ts-ignore
const Grid = styled.div`
  width: 100%;
  display: grid;
  justify-content: ${({ justifyContent }) => justifyContent || ''};
  grid-template-columns: ${({ columns }) => columns || ''};
  grid-template-rows: ${({ rows }) => rows || ''};
  grid-gap: ${({ gridGap }) => gridGap || ''};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : '')};
  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')}
`;

export default Grid;
