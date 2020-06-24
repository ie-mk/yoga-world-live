import React from 'react';
import Level from './Level';

const CoursesLevel = ({ courses, learningPathData }) => {
  const coursesData = Object.values(courses);

  const begginercourses = coursesData.filter(a => a.level === 'beginner');

  const intermediatecourses = coursesData.filter(
    a => a.level === 'intermediate',
  );
  const advancedcourses = coursesData.filter(a => a.level === 'advanced');

  const BegginnerHeading =
    'Part-01 : BEGGINER (' + begginercourses.length + ' COURSES)';
  const IntermediateHeading =
    'Part-02 : INTERMEDIATE (' + intermediatecourses.length + ' COURSES)';
  const AdvancedHeading =
    'Part-03 : ADVANCED (' + advancedcourses.length + ' COURSES)';

  return (
    <>
      {begginercourses.length && (
        <Level
          courses={begginercourses}
          learningPathData={learningPathData}
          heading={BegginnerHeading}
        />
      )}
      {intermediatecourses.length && (
        <Level
          courses={intermediatecourses}
          learningPathData={learningPathData}
          heading={IntermediateHeading}
        />
      )}
      {advancedcourses.length && (
        <Level
          courses={advancedcourses}
          learningPathData={learningPathData}
          heading={AdvancedHeading}
        />
      )}
    </>
  );
};

export default CoursesLevel;
