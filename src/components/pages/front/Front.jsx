import React from 'react';
import Styled from './Front.styles';
import { useTranslation } from 'react-i18next';
import PageContent from '../../foundation/PageContent';
import HeroFront from '../../heroFront/HeroFront';

const Front = () => {
  const { t } = useTranslation();

  return <HeroFront />;
};

export default Front;
