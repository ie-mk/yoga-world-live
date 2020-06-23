import React from 'react';
import Level from './Level';

const CoursesLevel = ({ courses, learningPathData }) => {
  const coursesData = Object.values(courses);
  console.log('---coursesData--');
  console.log(coursesData);
  const begginercourses = coursesData.filter(a => a.level == 'beginner');

  const intermediatecourses = coursesData.filter(
    a => a.level == 'intermediate',
  );
  const advancedcourses = coursesData.filter(a => a.level == 'advanced');

  let BegginnerHeading =
    'Part-01 : BEGGINER (' + begginercourses.length + ' COURSES)';
  let IntermediateHeading =
    'Part-02 : INTERMEDIATE (' + intermediatecourses.length + ' COURSES)';
  let AdvancedHeading =
    'Part-03 : ADVANCED (' + advancedcourses.length + ' COURSES)';

  return (
    <>
      {begginercourses.length !== 0 && (
        <Level
          courses={begginercourses}
          learningPathData={learningPathData}
          heading={BegginnerHeading}
        />
      )}
      {intermediatecourses.length !== 0 && (
        <Level
          courses={intermediatecourses}
          learningPathData={learningPathData}
          heading={IntermediateHeading}
        />
      )}
      {advancedcourses.length !== 0 && (
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
