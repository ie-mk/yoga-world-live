import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { fontSizeMap, spacing, colors } from '../../constants/styles';
import media from './media';

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${({ noMargin }) => (noMargin ? '0' : '10px')};
  font-size: ${fontSizeMap.h5};
  a {
    color: ${colors.matterhorn};
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
     ${'' /* //${({ active }) => (active ? '600' : '0')}; */}
    margin-right: ${({ noMargin }) => (noMargin ? '0' : spacing.xxl)};
    ${media.belowTabletLarge`
        margin: 0;
     `}
  }
  ${media.belowTabletLarge`
    width: 100%;
    justify-content: center;
    margin: 15px 0;
  `}
`;

const MenuLink = ({ href, as, text, children, dataTest, noMargin, active }) => {
  console.log('active--- ', active);

  return (
    <LinkWrapper noMargin={noMargin} active={active}>
      <Link href={href} as={as}>
        <a data-test={dataTest}>{children ? children : text}</a>
      </Link>
    </LinkWrapper>
  );
};
export default MenuLink;
