import React from 'react';
import Styled from './AuthorProfile.styles';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../../../store/selectors';
import FlexContainer from '../../../../foundation/FlexContainer';
import AdminInput from '../../../../foundation/input/AdminInput';
import { Formik, ErrorMessage, Field } from 'formik';
import { userActions } from '../../../../../store/actions';
import { spacing } from '../../../../../constants/styles';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import Grid from '../../../../foundation/Grid';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SectionTitle from '../../../../foundation/typography/SectionTitle';

const AuthorProfile = ({ dispatch, userProfile }) => {
  return (
    <Formik
      initialValues={{ ...userProfile }}
      enableReinitialize={true}
      //  validationSchema={profileFormValidation}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(userActions.updateUserProfile.request(values));
        setTimeout(() => setSubmitting(false), 1000);
      }}
    >
      <Styled.Wrapper>
        <CenteredFlexContainer>
          <SectionTitle noMargin={true} text="Your Author Profile" />
        </CenteredFlexContainer>
        {/*<FlexContainer width="100%" marginBottom={spacing.xl} flexWrap="wrap">*/}
        <Grid columns="1fr 1fr" gridGap={spacing.lg}>
          <AdminInput
            label="Name"
            width="100%"
            noMargin={true}
            margin="0 20px 0 0"
            name="firstName"
            disabled={true}
          />
          <AdminInput
            label="Surname"
            width="100%"
            noMargin={true}
            name="lastName"
            disabled={true}
          />
        </Grid>
        <AdminTextArea rows="5" width="100%" name="aboutMe" label="About Me" />
        <AdminTextArea
          rows="5"
          width="100%"
          name="skills"
          label="Skils"
          placeholder="HTML, CSS"
        />
      </Styled.Wrapper>
    </Formik>
  );
};

const mapStateToProps = state => ({
  userProfile: getUserProfile(state),
});

export default connect(mapStateToProps)(AuthorProfile);
