import styled from 'styled-components';
import media from '../../foundation/media';
export const Wrapper = styled.div``;

export const BillingWrapper = styled.div`
  padding: 0 90px 0 165px;
  ${media.belowTabletLarge`
    padding: 42px 20px;
  `}
`;

export const MembershipType = styled.div`
  display: flex;
  align-items: center;
  padding-top: 22px;
  justify-content: space-between;
  .mobileView {
    ${media.aboveTabletLarge`
    display: none;
  `}
  }
  .desktopView {
    ${media.belowTabletLarge`
    display: none;
  `}
  }
`;
export const GridWrapper = styled.div`
  margin-top: 44px;
`;

export default {
  Wrapper,
  BillingWrapper,
  MembershipType,
  GridWrapper,
};
