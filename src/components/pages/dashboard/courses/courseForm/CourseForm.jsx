import React from 'react';
import CourseAddNew from '../courseAddNew/CourseAddNew';
import CourseChapter01 from '../courseChapter01/CourseChapter01';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';

const CourseForm = () => {
  return (
    <ContainerBase>
      <CourseAddNew />
      {/* <CourseChapter01 /> */}
      <CourseChapter />
    </ContainerBase>
  );
};

export default CourseForm;
