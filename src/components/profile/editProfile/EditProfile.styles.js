import styled from 'styled-components';
import media from '../../foundation/media';
import { colors, spacing } from '../../../constants/styles';

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  ${media.belowTabletLarge`
    width: 125px;
    height: 125px;
  `}
`;

export const ProfileWrapper = styled.div`
  justify-content: center;
  ${media.belowTabletLarge`
   margin:auto;
   align-items:center;
  `}
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`;

const ViewWrapper = styled.div`
  margin: 12px 0 0 20px;
  ${media.aboveTabletLarge`
margin: 24px 0 0 48px;
`}
`;

const BackButtonContainer = styled.div`
  position: absolute;
  left: ${spacing.xl};
  top: 0;
  ${media.belowTabletLarge`
    top: -50px;
    left: 0;
  `}
`;

export const PhoneInputStyles = styled.div`
  padding-left: ${spacing.sm};
  border: 1px solid green;
  border-radius: 20px;
  .PhoneInput {
    height: 40px;
  }
  .PhoneInputInput {
    height: 35px;
    border: none;
    font-size: 24px;
  }
  .PhoneInputInput:focus {
    outline: none;
  }
`;
export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  color: gray;
`;

export const Container = styled.div`
  width: 100%;
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export default {
  ProfileWrapper,
  Image,
  RowContainer,
  ViewWrapper,
  BackButtonContainer,
  PhoneInputStyles,
  Label,
  InputRow,
  Container,
};
