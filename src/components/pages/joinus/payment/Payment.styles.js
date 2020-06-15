import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../../constants/styles';
import media from '../../../foundation/media';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${spacing.xxxl};
  ${media.belowMobileLarge`
    justify-content: center;
    margin-top: ${spacing.xl};
    flex-direction: row;
  `}
`;

const RadioButton = styled.input`
  width: ${spacing.xl};
  height: ${spacing.xl};
  margin-right: ${spacing.xl};
  border-radius: 20px;
  ${media.belowMobileLarge`
    width: ${spacing.md}; 
    height: ${spacing.md};
    margin-right: ${spacing.md};
  `}
`;

const RadioButtonLabel = styled.label`
  font-size: ${spacing.xl};
  padding-left: ${spacing.sm};
  ${media.belowMobileLarge`
    font-size:${spacing.md};
  `}
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 600px;
  ${media.belowMobileLarge`
    max-width : 300px;
    width: 300px;
  `}
`;

const InputWrapper = styled.div`
  width: 250px;
  ${media.belowMobileLarge`
    max-width : 150px;
    width: 150px;
  `}
`;

const PaypalWrapper = styled.div`
  width: 150px;
  height: 50px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${media.belowMobileLarge`
   flex-direction: column;
   justify-content: center;
  `}
`;

export default {
  ButtonWrapper,
  RadioButton,
  RadioButtonLabel,
  Wrapper,
  InputWrapper,
  PaypalWrapper,
  RowContainer,
};
