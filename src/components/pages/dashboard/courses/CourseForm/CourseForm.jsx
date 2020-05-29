import React from 'react';
import CourseAddNew from '../CourseAddNew/CourseAddNew';
import CourseChapter01 from '../CourseChapter01/CourseChapter01';
import { ContainerBase } from '../../../../foundation';

const CourseForm = () => {
  return (
    <ContainerBase>
      <CourseAddNew />
      <CourseChapter01 />
    </ContainerBase>
  );
};

export default CourseForm;
