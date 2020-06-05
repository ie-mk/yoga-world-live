import styled from 'styled-components';

import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../constants/styles';

export const ProfileWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 300px;
  margin-top: 100px;
  background-color: #2385d92b;
  @media only screen and (min-width: 600px) {
    margin-right: 100px;
    margin-left: 70px;
  }
`;
export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media only screen and (min-width: 600px) {
    margin-left: 100px;
  }
`;
export const ProfileInfoPageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #2385d92b;
  opacity: 0.4;
  @media only screen and (min-width: 600px) {
    margin-right: 100px;
    margin-left: 70px;
    padding-left: 200px;
    padding-right: 200px;
  }
`;
export const DesktopView = styled.div`
  @media only screen and (min-width: 600px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 200px;
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  @media only screen and (min-width: 600px) {
    .mobileView {
      display: none;
    }
  }
`;
export const DetailsWrapper = styled.div`
  margin-left: 50px;
  @media only screen and (min-width: 600px) {
    .mobileViewImage {
      display: none;
    }
  }
`;

export const Tab = styled.div`
  cursor: pointer;
  color: ${({ activeTab }) => (activeTab ? '#0EC9B0' : 'white')};
  text-decoration: ${({ activeTab }) => (activeTab ? 'underline' : '')};
`;
export const SocialImage = styled.img`
  padding: 5px;
`;
export const Name = styled.div`
  padding: 7px;
  font-size: 30px;
`;
export const Role = styled.div`
  padding: 7px;
  font-size: 24px;
`;
export const Place = styled.div`
  padding: 7px;
  font-size: 20px;
`;

export default {
  Image,
  ProfileWrapper,
  ProfileInfoPageWrapper,
  DesktopView,
  Wrapper,
  DetailsWrapper,
  Tab,
  SocialImage,
  Name,
  Role,
  Place,
};
