import React, { useState, useRef } from 'react';
import Styled from './BillingDetails.styles';
import HeroTitle from '../../../foundation/typography/HeroTitle';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../foundation/input/AdminInput';

import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Text24 from '../../../foundation/typography/Text24';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';

const CustomText24 = props => (
  <Text24
    mediaConfig={{
      belowTabletLarge: {
        margin: '0 0 7px 0',
      },
    }}
    {...props}
  />
);
const BillingDetails = () => {
  return (
    <>
      <HeroTitle
        margin="125px 0 46px 0"
        mobileMargin="60px 0 23px 0"
        fontWeight="700"
        text="Billing Details"
      />
      <CustomText24
        margin="0 0 65px 0"
        text="Your address is used to prepare your invoices. Your city and country are shown on profile for networking fetures"
      />

      <Formik
        initialValues={{ ...initialFormValues }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        <form>
          <AdminInput
            name="addressLine01"
            type="text"
            label="Address Line 01"
            color="white"
            backgroundColor="#293150"
            width="960px"
            mobileWidth="300px"
            height="50px"
            fontSize="h4"
            noMargin="0"
          />
          <AdminInput
            name="addressLine02"
            type="text"
            label="Address Line 02"
            backgroundColor="#293150"
            color="white"
            width="960px"
            mobileWidth="300px"
            fontSize="h4"
            height="50px"
          />
          <Styled.RowContainer>
            <AdminInput
              name="City"
              type="text"
              label="City"
              backgroundColor="#293150"
              color="white"
              width="460px"
              mobileWidth="300px"
              height="50px"
              fontSize="h4"
              noMargin="0"
            />
            <Styled.ViewWraper>
              <AdminInput
                name="State"
                type="text"
                backgroundColor="#293150"
                label="State / Region ( optional )"
                color="white"
                width="460px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
                noMargin="0"
              />
            </Styled.ViewWraper>
          </Styled.RowContainer>
          <Styled.RowContainer>
            <AdminInput
              name="Zip/PostalCode"
              type="text"
              label="Zip/PostalCode"
              backgroundColor="#293150"
              color="white"
              width="460px"
              mobileWidth="300px"
              height="50px"
              fontSize="h4"
            />
            <Styled.ViewWraper>
              <AdminInput
                name="Country"
                type="text"
                backgroundColor="#293150"
                label="Country"
                color="white"
                width="460px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
                noMargin="0"
              />
            </Styled.ViewWraper>
          </Styled.RowContainer>
          <CenteredFlexContainer>
            <Styled.RowContainer>
              <Button
                type="primary"
                width="250px"
                margin="0 40px 0 0"
                height="45px"
                marginMobile="35px 0 0 0"
                size="sm"
              >
                UPDATE MY PROFILE
              </Button>
              <Button
                type="action"
                width="250px"
                margin="0 0 0 0"
                height="45px"
                marginMobile="32px 0 0 0"
                size="sm"
              >
                CANCEL
              </Button>
            </Styled.RowContainer>
          </CenteredFlexContainer>
        </form>
      </Formik>
    </>
  );
};

const initialFormValues = {
  email: '',
  password: '',
  countrycode: '',
  mobile: '',
};
export default BillingDetails;
