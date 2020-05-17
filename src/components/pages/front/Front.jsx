import React from 'react';
import Styled from './Front.styles';
import { useTranslation } from 'react-i18next';
import PageContent from '../../foundation/PageContent';

const Front = () => {
  const { t } = useTranslation();

  return (
    <PageContent>
      <h1>Welcome to the Code School</h1>
    </PageContent>
  );
};

export default Front;
