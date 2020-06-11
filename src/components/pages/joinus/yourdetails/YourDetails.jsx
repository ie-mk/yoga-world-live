import React, { useEffect } from 'react';
import ContainerBase from '../../../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../../../foundation/button/Button';
import AdminInput from '../../../foundation/input/AdminInput';
import CheckBoxWithText from '../../../foundation/checkboxwithtext/CheckBoxWithText';
import FlexContainer from '../../../foundation/FlexContainer';
import { Formik, ErrorMessage, Field } from 'formik';
import SectionTitle from '../../../foundation/typography/SectionTitle';
import { fontSizeMap, spacing } from '../../../../constants/styles';

const YourDetails = () => {
  return (
    <ContainerBase
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      marginBottom="xxxl"
    >
      <SectionTitle
        text="Tell Us About Your Details"
        marginBottom={spacing.xl}
        marginTop={spacing.xl}
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
          <ContainerBase>
            <AdminInput
              name="name"
              type="text"
              label="Name"
              backgroundColor="#293150"
              width="400px"
              fontSize="h4"
            />
            <AdminInput
              name="email"
              type="text"
              label="Email"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
            <AdminInput
              name="mobile"
              type="text"
              label="Mobile"
              backgroundColor="#293150"
              width="100%"
              fontSize="h4"
            />
          </ContainerBase>

          <CheckBoxWithText
            label="I accept the terms of use"
            width="100%"
            color="white"
            fontSize="h4"
          />

          <FlexContainer justifyContent="flex-start" marginTop="xxl">
            <Button type="primary" size="sm" padding="lg">
              Next
            </Button>
          </FlexContainer>
        </form>
      </Formik>
    </ContainerBase>
  );
};

const initialFormValues = {
  name: '',
  email: '',
  mobile: '',
};
export default YourDetails;
