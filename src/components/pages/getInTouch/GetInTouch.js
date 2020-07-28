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
import {
  getUserProfileSelector,
  getUserSelector,
} from '../../../store/selectors';

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
          {({ values, handleSubmit, setFieldValue }) => (
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
                />
                <Styled.EmailLabel>Email</Styled.EmailLabel>
                <Styled.InputRow>
                  <input className="name-input" value={values.email} />
                  <Field className="hidden" name="email" />
                </Styled.InputRow>
                {/* <AdminInput
                  name="email"
                  type="text"
                  label="Email"
                  backgroundColor="#293150"
                  color="white"
                  inputColor="white"
                  width="600px"
                  mobileWidth="300px"
                  fontSize="h4"
                  height="50px"
                /> */}
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
                  />
                </Styled.InputRow>
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
                </Styled.RowContainer>
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
