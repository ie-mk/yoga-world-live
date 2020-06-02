import React from 'react';
import CourseDescription from '../courseDesctiption/CourseDescription';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';

const AddNewCourse = () => {
  return (
    <ContainerBase>
      <CourseDescription />
      {/* <CourseChapter01 /> */}
      <CourseChapter />
    </ContainerBase>
  );
};

export default AddNewCourse;
