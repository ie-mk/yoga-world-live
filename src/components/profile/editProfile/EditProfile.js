import React, { useState, useRef } from 'react';
import Styled from './EditProfile.styles';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import HeroTitle from '../../foundation/typography/HeroTitle';
import Grid from '../../foundation/Grid';
import { spacing } from '../../../constants/styles';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../foundation/input/AdminInput';
import ContainerBase from '../../foundation/ContainerBase';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import EditAccount from './editAccountDetails/EditAccountDetails';
import BillingDetails from './billingDetails/BillingDetails';
import { userActions } from '../../../store/actions';
import SpinnerLarge from '../../foundation/spinner/SpinnerLarge';
import needsLoginWrapper from '../../../utils/needsLoginWrapper';

const EditProfile = ({
  user: { profile, loadingPicture: loading },
  dispatch,
}) => {
  const fileInputRef = useRef(null);
  const profileImage = profile && (profile.profileImage || profile.photoURL);

  const uid = profile.uid;

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
    <CenteredFlexContainer>
      {loading ? <SpinnerLarge /> : null}
      <HeroTitle
        margin="30px 0 100px 0"
        mobileMargin="15px 0 50px 0"
        fontWeight="700"
        text="Edit Your Profile"
      />
      <CenteredFlexContainer>
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xxxxl}
        >
          <Styled.ProfileWrapper>
            <div>
              {' '}
              <Styled.Image src={profileImage} />
            </div>
            <div>
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
            </div>
          </Styled.ProfileWrapper>

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
                name="name"
                type="text"
                label="Full Name"
                color="white"
                backgroundColor="#293150"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
                noMargin="0"
              />
              <AdminInput
                name="profile title"
                type="text"
                label="Profile Title ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                fontSize="h4"
                height="50px"
              />
              <AdminInput
                name="website"
                type="text"
                label="Website ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />
              <AdminInput
                name="Linkdin Profiile"
                type="text"
                label="Linkdin Profile ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />
              <AdminInput
                name="Facebook Profile"
                type="text"
                label="Facebook Profile ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />
              <AdminInput
                name="Instagram Profile"
                type="text"
                label="Instagram Profile ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />
              <AdminInput
                name="Twitter Profiile"
                type="text"
                label="Twitter Profile ( optional )"
                backgroundColor="#293150"
                color="white"
                width="600px"
                mobileWidth="300px"
                height="50px"
                fontSize="h4"
              />
            </form>
          </Formik>
        </Grid>
      </CenteredFlexContainer>
      <EditAccount />
      <BillingDetails />
    </CenteredFlexContainer>
  );
};
const initialFormValues = {
  name: '',
  cardnumber: '',
  expirydate: '',
  cvv: '',
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(needsLoginWrapper(EditProfile));
