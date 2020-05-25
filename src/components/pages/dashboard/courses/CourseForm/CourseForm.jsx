import React, { useState, memo } from 'react';
import Styled from './CourseForm.styles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
//import { getUserProfileSelector, getUserSelector } from '../../store/selectors';
// import profileFormValidation from './profileForm.validation';
//import PhoneInput from 'react-phone-number-input';
import styled from 'styled-components';
// import { userActions } from '../../store/actions';
import { ContainerBase } from '../../../../foundation';
import AdminInput from '../../../../foundation/input/AdminInput';

const StyledError = styled.div`
  color: red;
`;

let CourseForm = () => {
  return (
    <ContainerBase paddingLeft="xxxl" paddingRight="xxxl">
      <Styled.RowContainer>
        <Styled.Title>Published(10)</Styled.Title>
        <Styled.Title>Unpublished(06)</Styled.Title>
        <Styled.Title isStrong={true} textDecor={true}>
          Add New
        </Styled.Title>
      </Styled.RowContainer>

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
            <Styled.InputRow>
              <Styled.MidContainer>
                {/*<Styled.Label>Course Title</Styled.Label>*/}
                {/*<Styled.InputStyles>*/}
                {/*  <Field name="coursetitle" type="text" />*/}
                {/*</Styled.InputStyles>*/}
                <AdminInput
                  name="courseTitle"
                  type="text"
                  label="Course Title"
                />
              </Styled.MidContainer>
              <Styled.AddressContainer>
                <Styled.Label>Thumbnail</Styled.Label>
                <Styled.InputStyles>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={event => {
                      setFieldValue('file', event.currentTarget.files[0]);
                    }}
                  />
                </Styled.InputStyles>
              </Styled.AddressContainer>
            </Styled.InputRow>
            <Styled.InputRow>
              <Styled.Container>
                <Styled.Label>Difficulty</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="difficulty"
                    className="select"
                    component="select"
                    placeholder="Choose difficulty"
                  >
                    <option value="">Choose difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                </Styled.InputStyles>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>Duration</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="duration"
                    className="select"
                    component="select"
                    placeholder="Set duration"
                  >
                    <option value="">Set duration</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                </Styled.InputStyles>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>Author</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="author"
                    className="select"
                    component="select"
                    placeholder="Select author"
                  >
                    <option value="">Select author </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                </Styled.InputStyles>
              </Styled.Container>
            </Styled.InputRow>
            <Styled.InputRow>
              <Styled.Container>
                <Styled.Label>Category</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="category"
                    className="select"
                    component="select"
                    placeholder="Choose category"
                  >
                    <option value="">Choose category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                </Styled.InputStyles>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>Learning path</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="learningpath"
                    className="select"
                    component="select"
                    placeholder="Choose a learning path"
                  >
                    <option value="">Choose a learning path</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Field>
                </Styled.InputStyles>
              </Styled.Container>

              <Styled.Container>
                <Styled.Label>Number of chapters</Styled.Label>
                <Styled.InputStyles>
                  <Field name="NumberOfChapters" type="text" />
                </Styled.InputStyles>
              </Styled.Container>
            </Styled.InputRow>
            <Styled.InputRow>
              <Styled.Container>
                <Styled.Label>What you will learn ?</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="learn"
                    rows="10"
                    cols="110"
                    className="textarea"
                    component="textarea"
                  />
                </Styled.InputStyles>
              </Styled.Container>
            </Styled.InputRow>
            <Styled.InputRow>
              <Styled.Container>
                <Styled.Label>Pre-requisites ?</Styled.Label>
                <Styled.InputStyles>
                  <Field
                    name="prerequisites"
                    rows="10"
                    cols="110"
                    className="textarea"
                    component="textarea"
                  />
                </Styled.InputStyles>
              </Styled.Container>
            </Styled.InputRow>
          </form>
        )}
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  coursetitle: '',
  file: '',
  difficulty: '',
  duration: '',
  author: '',
  category: '',
  learningpath: '',
  NumberOfChapters: 2,
  learn: '',
  prerequisites: '',
};

export default CourseForm;
