import React from 'react';
import Styled from './Courses.styles';
import { useTranslation } from 'react-i18next';
import ChooseLearningPath from '../dashboard/courses/chooseLearningPath/ChooseLearningPath';
import CourseFeatures from '../dashboard/courses/courseFeatures/CourseFeatures';

const Courses = () => {
  const { t } = useTranslation();

  return (
    <>
      <CourseFeatures />
      <ChooseLearningPath />
    </>
  );
};

export default Courses;
