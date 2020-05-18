import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkWrapper = styled.div`
  margin-left: 10px;
`;

const MenuLink = ({ href, as, text, children, dataTest }) => (
  <LinkWrapper>
    <Link href={href} as={as}>
      <button dataTest={dataTest}>{children ? children : text}</button>
    </Link>
  </LinkWrapper>
);

export default MenuLink;
