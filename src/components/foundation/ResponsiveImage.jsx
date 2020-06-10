import React from 'react';
import styled from 'styled-components';
import getMedia from '../../utils/media';
import media from '../foundation/media';

const ImageContainer = styled.div`
  width: ${({ width }) => width || ''};
  max-width: ${({ maxWidth }) => maxWidth || ''};
  height: ${({ height }) => height || ''};
  padding: ${({ padding }) => padding || ''};
  margin: ${({ margin }) => margin || ''};
  border-radius: ${({ borderRadius }) => borderRadius || ''};
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: ${({ backGroundSize }) => backGroundSize || 'cover'};
  flex: ${({ flex }) => flex || ''};
  cursor: ${({ cursor }) => cursor || ''};
  position: ${({ position }) => position || ''};
  z-index: ${({ zIndex }) => zIndex || ''};
  min-width: 0;

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')}

  ${media.belowTablet`
     max-width: 300px;
     width: 100px;
     height: 100px;
  `}
`;

const ResponsiveImage = props => {
  return <ImageContainer {...props} />;
};

export default ResponsiveImage;
