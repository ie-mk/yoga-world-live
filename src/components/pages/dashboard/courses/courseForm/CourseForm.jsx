import React from 'react';
import CourseAddNew from '../courseAddNew/CourseAddNew';
import CourseChapter01 from '../courseChapter01/CourseChapter01';
import { ContainerBase } from '../../../../foundation';
import CourseChapter from '../courseChapter/CourseChapter';

const mockChapterData = {
  someId: {
    chaptertitle: 'someTitle1',
    description: 'Some description1',
    videolink: 'someLink1',
    assignment: 'link to the task1',
  },
  someId2: {
    chaptertitle: 'someTitle',
    description: 'Some description',
    videolink: 'someLink',
    assignment: 'link to the task',
  },
};

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
