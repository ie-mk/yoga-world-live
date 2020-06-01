import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Styled from './Authors.styles';
import AuthorsData from './authorsData/authorsData';
import LearningPaths from './learningPathData/LearningPathData';

const Authors = () => {
  const [activeAuthors, setActiveAuthors] = useState(true);
  const [activeLearning, setActiveLearning] = useState(false);

  const handleAuthors = () => {
    setActiveAuthors(true);
    setActiveLearning(false);
  };
  const handleLearningPaths = () => {
    setActiveAuthors(false);
    setActiveLearning(true);
  };

  return (
    <ContainerBase paddingLeft="xl" paddingRight="xl">
      <Styled.RowContainer>
        <Styled.Title
          isStrong={activeAuthors}
          textDecor={activeAuthors}
          onClick={() => handleAuthors()}
        >
          Authors
        </Styled.Title>
        <Styled.Title
          isStrong={activeLearning}
          textDecor={activeLearning}
          onClick={() => handleLearningPaths()}
        >
          Learning Paths
        </Styled.Title>
      </Styled.RowContainer>
      <div style={{ marginTop: '30px' }}>
        {activeAuthors && <AuthorsData />}
        {activeLearning && <LearningPaths />}
      </div>
    </ContainerBase>
  );
};

export default Authors;
