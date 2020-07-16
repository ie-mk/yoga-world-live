import React, { useState, useRef } from 'react';
import Styled from './ChangePassword.styles';
import HeroTitle from '../../../../foundation/typography/HeroTitle';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../foundation/input/AdminInput';
import Button from '../../../../foundation/button/Button';
import { connect } from 'react-redux';
import Text24 from '../../../../foundation/typography/Text24';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import Router from 'next/router';
import needsLoginWrapper from '../../../../../utils/needsLoginWrapper';
import api from '../../../../../api/api.min';

const { firebase } = api;

const ChangePassword = ({ setChangePassword }) => {
  return (
    <>
      <CenteredFlexContainer>
        <Formik
          initialValues={{ ...initialFormValues }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            //setChangePassword(false);
            var user = firebase.auth().currentUser;
            var newPassword = values.NewPassword;
            console.log(user);
            console.log(newPassword);
            user
              .updatePassword(newPassword)
              .then(function() {
                // Update successful.
                console.log('successfully');
              })
              .catch(function(error) {
                // An error happened.
              });
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <AdminInput
                name="OldPassword"
                type="text"
                label="Old Password"
                color="white"
                backgroundColor="#293150"
                width="600px"
                inputColor="white"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
                noMargin="0"
              />
              <AdminInput
                name="NewPassword"
                type="text"
                label="New Password"
                backgroundColor="#293150"
                color="white"
                inputColor="white"
                width="600px"
                mobileWidth="300px"
                fontSize="h4"
                height="50px"
              />
              <AdminInput
                name="ReEnterNewPassword"
                type="text"
                label="Re-Enter New Password"
                backgroundColor="#293150"
                color="white"
                width="600px"
                inputColor="white"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />

              <Button
                type="primary"
                width="179px    "
                margin="20px 0px 0 0"
                height="45px"
                marginMobile="10px 0 0 0"
                size="sm"
              >
                CONFIRM
              </Button>
            </form>
          )}
        </Formik>
      </CenteredFlexContainer>
    </>
  );
};

const initialFormValues = {
  OldPassword: '',
  NewPassword: '',
  ReEnterNewPassword: '',
};

export default connect()(needsLoginWrapper(ChangePassword));
