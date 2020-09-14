import React, { useState, useRef } from 'react';
import Styled from './EditProfile.styles';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import HeroTitle from '../../foundation/typography/HeroTitle';
import Grid from '../../foundation/Grid';
import { spacing } from '../../../constants/styles';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../foundation/input/AdminInput';
import ContainerBase from '../../foundation/ContainerBase';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import BillingDetails from './billingDetails/BillingDetails';
import { userActions } from '../../../store/actions';
import SpinnerLarge from '../../foundation/spinner/SpinnerLarge';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';
import PhoneInput from 'react-phone-number-input';
import {
  getUserProfileSelector,
  getUserSelector,
} from '../../../store/selectors';
import BackButton from '../../foundation/button/BackButton';

const EditProfile = ({
  user: { profile, loadingPicture: loading },
  dispatch,
  userProfile,
}) => {
  const fileInputRef = useRef(null);
  const profileImage = profile && (profile.profileImage || profile.photoURL);
  const uid = profile.uid;

  console.log(loading);

  const handleChange = event => {
    if (typeof event.target.files[0] === 'undefined') {
      return;
    }
    dispatch(
      userActions.updateUserProfilePicture.request({
        image: event.target.files[0],
        uid,
      }),
    );
  };

  return (
    <CenteredFlexContainer position="relative">
      {loading ? <SpinnerLarge /> : null}
      <HeroTitle
        margin="30px 0 100px 0"
        mobileMargin="15px 0 50px 0"
        fontWeight="700"
        text="Edit Your Profile"
      />
      <Styled.BackButtonContainer>
        <BackButton />
      </Styled.BackButtonContainer>
      <CenteredFlexContainer>
        <Formik
          initialValues={{ ...userProfile }}
          enableReinitialize={true}
          onSubmit={(values, { setSubmitting }) => {
            console.log('hello');
            setSubmitting(true);

            dispatch(userActions.updateUserProfile.request(values));
            setTimeout(() => setSubmitting(false), 1000);
          }}
        >
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                columns="1fr"
                marginBottom
                mediaConfig={{
                  aboveTabletLarge: {
                    'grid-template-columns': '1fr 1fr',
                  },
                  belowTabletLarge: {
                    'grid-gap': spacing.xl,
                  },
                }}
                gridGap={spacing.xxxxl}
              >
                <Styled.ProfileWrapper>
                  <CenteredFlexContainer>
                    <Styled.Image src={profileImage} />
                    <input
                      className="hidden"
                      type="file"
                      onChange={event => handleChange(event)}
                      ref={fileInputRef}
                    />
                    <Button
                      type="primary"
                      width="250px"
                      margin="55px 0 0 0"
                      height="45px"
                      marginMobile="30px 0 0 0"
                      size="sm"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Upload Photo
                    </Button>
                  </CenteredFlexContainer>
                </Styled.ProfileWrapper>
                <div>
                  <AdminInput
                    name="fullName"
                    type="text"
                    label="Full Name"
                    color="black"
                    width="600px"
                    inputColor="black"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                    noMargin="0"
                  />
                  <AdminInput
                    name="profileTitle"
                    type="text"
                    label="Profile Title ( optional )"
                    color="black"
                    inputColor="black"
                    width="600px"
                    mobileWidth="300px"
                    fontSize="h4"
                    height="50px"
                  />
                  <AdminInput
                    name="website"
                    type="text"
                    label="Website ( optional )"
                    color="black"
                    width="600px"
                    inputColor="black"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
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
                  {/*<AdminInput*/}
                  {/*  name="linkdinProfile"*/}
                  {/*  type="text"*/}
                  {/*  label="Linkdin Profile ( optional )"*/}
                  {/*  color="black"*/}
                  {/*  width="600px"*/}
                  {/*  inputColor="black"*/}
                  {/*  mobileWidth="300px"*/}
                  {/*  height="50px"*/}
                  {/*  fontSize="h4"*/}
                  {/*/>*/}
                  <AdminInput
                    name="facebookProfile"
                    type="text"
                    label="Facebook Profile ( optional )"
                    color="black"
                    width="600px"
                    inputColor="black"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="instagramProfile"
                    type="text"
                    label="Instagram Profile ( optional )"
                    color="black"
                    inputColor="black"
                    width="600px"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                  <AdminInput
                    name="twitterProfile"
                    type="text"
                    label="Twitter Profile ( optional )"
                    color="black"
                    width="600px"
                    inputColor="black"
                    mobileWidth="300px"
                    height="50px"
                    fontSize="h4"
                  />
                </div>
              </Grid>

              {/*<BillingDetails />*/}

              <CenteredFlexContainer>
                <Styled.RowContainer>
                  <Button
                    type="primary"
                    width="250px"
                    margin="0 40px 0 0"
                    height="45px"
                    marginMobile="35px 0 0 0"
                    size="sm"
                    submit={true}
                  >
                    UPDATE MY PROFILE
                  </Button>
                  {/*<Button*/}
                  {/*  type="secondary"*/}
                  {/*  width="250px"*/}
                  {/*  margin="0 0 0 0"*/}
                  {/*  height="45px"*/}
                  {/*  marginMobile="32px 0 0 0"*/}
                  {/*  size="sm"*/}
                  {/*>*/}
                  {/*  CANCEL*/}
                  {/*</Button>*/}
                </Styled.RowContainer>
              </CenteredFlexContainer>
            </form>
          )}
        </Formik>
      </CenteredFlexContainer>
    </CenteredFlexContainer>
  );
};
const initialFormValues = {
  fullName: '',
  profileTitle: '',
  website: '',
  linkdinProfile: '',
  facebookProfile: '',
  instagramProfile: '',
  twitterProfile: '',
  addressLine01: '',
  addressLine02: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  email: '',
  password: '',
  mobileNo: '',
};

const mapStateToProps = state => ({
  userProfile: { ...initialFormValues, ...getUserProfileSelector(state) },
  user: getUserSelector(state),
});
export default connect(mapStateToProps)(needsLoginWrapper(EditProfile));
