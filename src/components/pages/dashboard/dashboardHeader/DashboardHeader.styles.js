import styled from 'styled-components';
import { spacing, dashboard } from '../../../../constants/styles';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  margin-left: 180px;
`;
const SearchIcon = styled.img`
  width: 26px;
  height: 26px;
`;
const Input = styled.input`
  margin-left: ${spacing.lg};
  width: 392px;
  border: none;
`;
const ProfileIcon = styled.img`
  width: 38px;
  height: 38px;
`;
const NotificationIcon = styled.img`
  margin-left: ${spacing.xxxxl};
  width: 16px;
  height: 16px;
  margin-right: ${spacing.xxl};
`;
const Label = styled.label`
  margin-left: ${spacing.lg};
`;

export default {
  Wrapper,
  SearchWrapper,
  SearchIcon,
  Input,
  ProfileIcon,
  NotificationIcon,
  Label,
};
