import React, { useState } from 'react';
import Styled from './CourseLesson.styles';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminDropDown from '../../../../foundation/dropdown/AdminDropDown';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../foundation/button/Button';
import { Formik, ErrorMessage, Field } from 'formik';

const lessonsDataMock = {
  someId: {
    lessontitle: 'someTitle1',
    description: 'Some description1',
    videolink: 'someLink1',
    assignment: 'link to the task1',
  },
  someId2: {
    lessontitle: 'someTitle',
    description: 'Some description',
    videolink: 'someLink',
    assignment: 'link to the task',
  },
};

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  ...props
}) => {
  return (
    <Styled.Row>
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Row>
  );
};

let CourseLesson = () => {
  // return <Styled.Wrapper>Course lesson</Styled.Wrapper>;
  let initialFormValues = {
    lessontitle: '',
    description: '',
    videolink: '',
    assignment: '',
  };
  const [KeyValue, setKeyValue] = useState(null);
  var lessons = Object.values(lessonsDataMock);
  if (lessons.length !== 0) {
    initialFormValues = lessons[0];
  }
  console.log('initialFormValues');
  console.log(initialFormValues);
  return (
    <Styled.MidContainer>
      <Styled.AddLesson>
        {Object.keys(lessonsDataMock).map((key, idx) => {
          const data = lessonsDataMock[key];
          return (
            <Styled.LessonContainer key={key}>
              <Field
                component={RadioButton}
                name={data.title}
                label={`Lesson ${idx + 1}`}
              />
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
            </Styled.LessonContainer>
          );
        })}
        <Styled.AddNewWrapper>
          <Button type="primary" fontSize="18px" borderRadius="sm" width="50%">
            + Add Lesson
          </Button>
        </Styled.AddNewWrapper>
      </Styled.AddLesson>
      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(userActions.updateUserProfile.request(values));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Styled.LessonFormContainer>
              <AdminInput
                name="lessontitle"
                type="text"
                label="Lesson Title"
                placeholder="Lesson Title"
                width="100%"
                backgroundColor="white"
              />
              <AdminTextArea
                name="description"
                rows="5"
                cols="10"
                component="textarea"
                placeholder="Lesson Breif"
                label="Lesson Breif"
                width="100%"
                backgroundColor="white"
              />
              <ContainerBase flexDirection="row" display="flex">
                <AdminInput
                  name="videolink"
                  type="text"
                  label="Video Link"
                  placeholder="video link"
                  backgroundColor="white"
                  width="70%"
                />
                <Styled.Upload marginTop="xxl">upload</Styled.Upload>
              </ContainerBase>
              <AdminInput
                name="assignment"
                type="text"
                label="Practice Page Link/Assignment"
                placeholder="Assignment"
                backgroundColor="white"
                width="100%"
              />
            </Styled.LessonFormContainer>
          </form>
        )}
      </Formik>
    </Styled.MidContainer>
  );
};

export default CourseLesson;
