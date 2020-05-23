import styled from 'styled-components';
import { spacing, fontSizeMap } from '../../../../constants/styles';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  margin-left: ${spacing.xxxxxxl};
  display: flex;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const Input = styled.input`
  margin-left: ${spacing.left};
  width: 391px;
  font-size: ${fontSizeMap.text};
  border: none;
`;
const ProfileIcon = styled.img`
  width: 38px;
  height: 38px;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const NotificationIcon = styled.img`
  margin-left: ${spacing.xxxxxl};
  width: 16px;
  height: 16px;
  margin-right: ${spacing.xxl};
`;
const Label = styled.label`
  margin-left: ${spacing.left};
  font-size: ${fontSizeMap.text};
  width: 101px;
`;

export default {
  Wrapper,
  SearchWrapper,
  SearchIcon,
  Input,
  ProfileIcon,
  NotificationIcon,
  Label,
  ProfileWrapper,
};
