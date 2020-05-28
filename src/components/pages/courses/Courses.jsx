import React from 'react';
import Styled from './Courses.styles';
import { useTranslation } from 'react-i18next';
import ChooseLearningPath from '../dashboard/courses/chooseLearningPath/ChooseLearningPath';

const Courses = () => {
  const { t } = useTranslation();

  return (
    <>
      <ChooseLearningPath />
    </>
  );
};

export default Courses;
