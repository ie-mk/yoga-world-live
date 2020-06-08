import React, { useState } from 'react';
import Styled from './CourseLesson.styles';

import Button from '../../../../foundation/button/Button';
import FlexContainer from '../../../../foundation/FlexContainer';

let CourseLessonHeader = ({ dispatch, data, chapterId }) => {
  return (
    <FlexContainer>
      <input type="checkbox" />
      {data.title}
      <Button
        type="action"
        fontSize="18px"
        borderRadius="sm"
        width="25%"
        margin="null"
      >
        Edit
      </Button>
      <Button
        type="action"
        fontSize="18px"
        borderRadius="sm"
        width="25%"
        margin="null"
      >
        Delete
      </Button>
    </FlexContainer>
  );
};

export default CourseLessonHeader;
