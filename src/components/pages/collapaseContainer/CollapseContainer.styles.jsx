import styled, { css } from 'styled-components';
import { colors, fontSizeMap, spacing } from '../../../constants/styles';
import { lightenDarkenColor } from '../../../utils/colors';

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 20px;
  font-weight: 500;
  border-radius: 10px;
  background: ${colors.background.violetsecondary};
`;

const Header = styled.div`
  display: flex;
  margin-left: 20px;
`;

const StyledHeaderTitle = styled.header`
  margin-right: 30px;
`;

const Wrapper = styled.div`
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #1e2540;
  margin-bottom: 34px;
  border-radius: 10px;
  &:first-child {
    margin-top: 10px;
  }
  color: ${colors.white};
`;

const CollapseButton = styled.span`
  cursor: pointer;
  padding-right: 20px;
  font-size: 28px;
  font-weight: 500;
`;

const renderOutsideContainerCSS = css`
  position: absolute;
  left: -10000px;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${spacing.md};
  color: white;
  display: ${({ collapsed, renderHidden }) =>
    collapsed && !renderHidden ? 'none' : 'block'};
  ${({ renderHidden, collapsed }) =>
    renderHidden && collapsed ? renderOutsideContainerCSS : ''};
`;

const Footer = styled.div`
  padding: 10px;
  border-top: 1px solid ${lightenDarkenColor(colors.gray, -20)};
  background-color: ${lightenDarkenColor(colors.gray, 20)};
  display: ${({ collapsed }) => (collapsed ? 'none' : 'block')};
`;

export default {
  Wrapper,
  Card,
  Header,
  HeaderWrapper,
  StyledHeaderTitle,
  Content,
  CollapseButton,
  Footer,
};
