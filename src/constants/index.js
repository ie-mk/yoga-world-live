import React from 'react';

export const IS_SERVER = typeof window === 'undefined';

export const LEVEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export const LEARNING_PATH = {
  frontend: 'Frontend developer',
  backend: 'Backend developer',
  designer: 'Designer',
};

export const LEARNING_PATH_OPTIONS = Object.keys(LEARNING_PATH).map(key => {
  return (
    <option key={key} value={key}>
      {LEARNING_PATH[key]}
    </option>
  );
});
