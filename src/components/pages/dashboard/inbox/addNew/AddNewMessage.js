import React, { useState, memo } from 'react';
import Styled from './AddNewMessagestyles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../foundation/input/AdminInput';

import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/uploadimage/AdminUploadImage';
import Button from '../../../../foundation/button/Button';

let AddNewMember = ({ setNewAdd }) => {
  const rolearr = [
    { show: 'Select Role', value: '' },
    { show: 'Author', value: 'Author' },
    { show: 'Admin', value: 'Admin' },
  ];
  const roleoptions = rolearr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });
  return (
    <Styled.ModalWrapper>
      <Styled.RowContainer>
        <Styled.Title isStrong={true}>New Message</Styled.Title>
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
              <AdminInput
                name="courseTitle"
                type="text"
                label="Enter Member ID(Name / Email / Phone)"
                width="60%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
              />
              <AdminUploadImage width="40%" label="Attachements" />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="subject"
                type="text"
                label="Subject"
                width="60%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
              />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="learn"
                rows="10"
                cols="110"
                component="textarea"
                label="Type Your Message( Login details, portal links and guidelines)"
                width="100%"
                height="170px"
                backgroundColor="white"
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                width="200px"
                borderRadius="sm"
                height="45px"
                size="sm"
              >
                Send
              </Button>

              <Button
                width="200px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => setNewAdd(false)}
              >
                Cancel
              </Button>
            </Styled.ButtonWrapper>
          </form>
        )}
      </Formik>
    </Styled.ModalWrapper>
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

export default AddNewMember;
