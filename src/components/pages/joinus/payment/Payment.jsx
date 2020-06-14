import React, { useEffect, useState } from 'react';
import ContainerBase from '../../../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../../../foundation/button/Button';
import AdminInput from '../../../foundation/input/AdminInput';
import CheckBoxWithText from '../../../foundation/checkboxwithtext/CheckBoxWithText';
import FlexContainer from '../../../foundation/FlexContainer';
import { Formik, ErrorMessage, Field } from 'formik';
import SectionTitle from '../../../foundation/typography/SectionTitle';
import { fontSizeMap, spacing } from '../../../../constants/styles';
import Styled from './Payment.styles';

const YourDetails = () => {
  const [Paymentmethod, setPaymentmethod] = useState(1);

  return (
    <ContainerBase
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginBottom="xxxl"
    >
      <SectionTitle text="Choose Your Payment Method" />
      <Formik
        initialValues={{ ...initialFormValues }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        <form>
          <ContainerBase
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginTop="xxxls"
          >
            <div>
              <input
                name="Paypal"
                type="radio"
                id="Paypal"
                value="Paypal"
                onChange={setPaymentmethod}
              />
              <Styled.RadioButtonLabel>Paypal</Styled.RadioButtonLabel>
            </div>

            <div>
              <input
                name="credit/debitcard"
                type="radio"
                id="credit/debitcard"
                value="credit/debitcard"
                onChange={setPaymentmethod}
              />
              <Styled.RadioButtonLabel>
                Credit/Debit Card
              </Styled.RadioButtonLabel>
            </div>
          </ContainerBase>
          <Styled.Wrapper>
            <AdminInput
              name="name"
              type="text"
              label="Name on the card"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
            <AdminInput
              name="cardnumber"
              type="text"
              label="Card Number"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
          </Styled.Wrapper>

          <ContainerBase
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginTop="xxxls"
          >
            <Styled.InputWrapper>
              <AdminInput
                name="expirydate"
                type="text"
                label="Expiry Date"
                backgroundColor="#293150"
                width="100%"
                fontSize="h4"
                placeholder="MM/YY"
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <AdminInput
                name="cvv"
                type="text"
                label="CVV"
                backgroundColor="#293150"
                width="100%"
                fontSize="h4"
              />
            </Styled.InputWrapper>
          </ContainerBase>
          <Styled.ButtonWrapper>
            <Button type="primary" size="sm" padding="lg">
              Pay $3999
            </Button>
          </Styled.ButtonWrapper>
        </form>
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  name: '',
  cardnumber: '',
  expirydate: '',
  cvv: '',
};
export default YourDetails;
