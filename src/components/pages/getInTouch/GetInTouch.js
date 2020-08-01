import React, { useState, useRef } from 'react';
import Styled from './GetInTouch.styles';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import HeroTitle from '../../foundation/typography/HeroTitle';
import Text24 from '../../foundation/typography/Text24';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../foundation/input/AdminInput';
import AdminTextArea from '../../foundation/textarea/AdminTextArea';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import { userActions } from '../../../store/actions';
import PhoneInput from 'react-phone-number-input';
import { useRouter } from 'next/router';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';
import styled from 'styled-components';
import {
  getUserProfileSelector,
  getUserSelector,
} from '../../../store/selectors';

const StyledError = styled.div`
  color: red;
`;

const getInTouch = ({ dispatch, userDetails }) => {
  const router = useRouter();
  initialFormValues.email = userDetails.loginProviderData.email;
  return (
    <CenteredFlexContainer position="relative">
      <HeroTitle
        margin="0 0 48px 0"
        mobileMargin="0 0 24px 0"
        fontWeight="700"
        text="Get in Touch"
      />

      <CenteredFlexContainer>
        <Formik
          initialValues={{ ...initialFormValues }}
          enableReinitialize={true}
          validate={values => {
            const errors = {};
            if (!values.message) {
              errors.message = 'Please enter your message';
            }
            if (!values.name) {
              errors.name = 'Please enter name';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log('hello');
            setSubmitting(true);

            dispatch(
              userActions.createGetIntouchMessage.request({ data: values }),
            );
            setTimeout(() => setSubmitting(false), 1000);
            router.back();
          }}
        >
          {({ values, errors, touched, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <AdminInput
                  name="name"
                  type="text"
                  label="Name"
                  color="white"
                  backgroundColor="#293150"
                  width="600px"
                  inputColor="white"
                  mobileWidth="300px"
                  height="50px"
                  fontSize="h4"
                  noMargin="0"
                />
                <StyledError>
                  {errors.name && touched.name && errors.name}
                </StyledError>
                <Styled.EmailLabel>Email</Styled.EmailLabel>
                <Styled.InputRow>
                  <input className="name-input" value={values.email} />
                  <Field className="hidden" name="email" />
                </Styled.InputRow>
                <Styled.InputRow>
                  <Styled.Container>
                    <Styled.Label>Mobile</Styled.Label>
                    <Styled.PhoneInputStyles>
                      <PhoneInput
                        name="mobileNo"
                        international
                        defaultCountry="CA"
                        value={values.mobileNo || ''}
                        onChange={val => setFieldValue('mobileNo', val)}
                      />
                    </Styled.PhoneInputStyles>
                  </Styled.Container>
                </Styled.InputRow>
                <Styled.InputRow>
                  <AdminTextArea
                    name="message"
                    rows="10"
                    cols="110"
                    component="textarea"
                    label="Type Your Message"
                    color="white"
                    inputColor="white"
                    backgroundColor="#293150"
                    width="600px"
                    height="120px"
                    mobileWidth="300px"
                    fontSize="h4"
                    noMargin="0"
                  />
                </Styled.InputRow>
                <StyledError>
                  {errors.message && touched.message && errors.message}
                </StyledError>
                <Styled.CheckBoxItemWrapper>
                  <Styled.CheckBox type="checkbox" />
                  <Text24
                    margin="0 0 0 23px"
                    mediaConfig={{
                      belowTabletLarge: {
                        margin: '0 0 0 12px',
                      },
                    }}
                    text="I agree to receive other communications from Code School. You may unsubscribe from these communications at any time."
                  />
                </Styled.CheckBoxItemWrapper>
                <CenteredFlexContainer>
                  <Styled.RowContainer>
                    <Button
                      type="primary"
                      width="170px"
                      margin="50px 40px 0 0"
                      height="45px"
                      marginMobile="35px 0 0 0"
                      size="sm"
                      submit={true}
                    >
                      CONFIRM
                    </Button>
                    <Button
                      type="secondary"
                      width="170px"
                      margin="50px 40px 0 0"
                      height="45px"
                      marginMobile="35px 0 0 0"
                      size="sm"
                      submit={true}
                    >
                      CANCEL
                    </Button>
                  </Styled.RowContainer>
                </CenteredFlexContainer>
              </div>
            </form>
          )}
        </Formik>
      </CenteredFlexContainer>
    </CenteredFlexContainer>
  );
};
const initialFormValues = {
  name: '',
  email: '',
  mobileNo: '',
  message: '',
};
const mapStateToProps = state => ({
  userDetails: state.user,
});
export default connect(mapStateToProps)(needsLoginWrapper(getInTouch));
