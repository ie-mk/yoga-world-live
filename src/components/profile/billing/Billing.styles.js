import styled from 'styled-components';
import media from '../../foundation/media';
export const Wrapper = styled.div``;

export const BillingWrapper = styled.div`
  padding: 0 90px 0 165px;
  ${media.belowTabletLarge`
    padding: 42px 20px;
  `}
  .mobileView {
    ${media.aboveTabletLarge`
    display: none;
  `}
  }
  .desktopView {
    ${media.belowTabletLarge`
    
    display: none;
   
  `}
`;

export const MembershipType = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
  justify-content: space-between;
  ${media.belowTabletLarge`
  margin-top: 44px;
 
 
`}
  .mobileView {
    ${media.aboveTabletLarge`
    display: none;
  `}
  }
  .desktopView {
    ${media.belowTabletLarge`
    margin-top: 44px;
    display: none;
   
  `}
  }
`;

export const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const GridWrapper = styled.div`
 flex:1;
  display:flex;
 
  margin-top: 44px;
  .mobileView {
    ${media.aboveTabletLarge`
    display: none;
  `}
  }
  .desktopView {
    ${media.belowTabletLarge`
    
    display: none;
   
  `}
`;
export const CardImage = styled.img`
  width: 168px;
  height: 75px;
  padding-right: 52px;
`;

export default {
  Wrapper,
  BillingWrapper,
  MembershipType,
  GridWrapper,
  CardWrapper,
  CardImage,
};
