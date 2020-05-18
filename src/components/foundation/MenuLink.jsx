import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from './button/Button';

const LinkWrapper = styled.div`
  margin-left: 10px;
`;

const MenuLink = ({ href, as, text, children, dataTest }) => (
  <LinkWrapper>
    <Link href={href} as={as}>
      <Button type="navbar" dataTest={dataTest}>
        {children ? children : text}
      </Button>
    </Link>
  </LinkWrapper>
);

export default MenuLink;
