import React, { useState } from 'react';
import Styled from './Profile.styles';
import ContainerBase from '../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../foundation/button/Button';
import HeroTitle from '../foundation/typography/HeroTitle';
import CardTitle from '../foundation/typography/CardTitle';
import BodyText from '../foundation/typography/BodyText';
import FlexContainer from '../foundation/FlexContainer';
import Billing from './billing/Billing';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('learning');

  const isActiveLearning = activeTab === 'learning';
  const isActiveInbox = activeTab === 'inbox';
  const isActiveBilling = activeTab === 'billing';
  const isActivePreferences = activeTab === 'preferences';

  return (
    <ContainerBase>
      <Styled.ProfileWrapper>
        <Styled.ImageWrapper>
          <Styled.Image src={user.photoURL} />
          <Button
            className="mobileView"
            type="primary"
            width="100px"
            borderRadius="sm"
            height="45px"
            size="sm"
            margin="34px 0 0"
            mobileSameSize={true}
          >
            Edit
          </Button>
        </Styled.ImageWrapper>
        <Styled.ProfileDetails>
          <Styled.DetailsWrapper>
            <HeroTitle margin="0 0 16px 0" text="Student Name" />
            <CardTitle
              margin="0 0 16px 0"
              fontWeight="400"
              text="Frontend Developer"
            />
            <FlexContainer margin="0 0 8px 0" alignItems="center">
              <i className="fa fa-map-marker" aria-hidden="true" />
              <BodyText>Wembley</BodyText>
            </FlexContainer>

            <FlexContainer margin="0 0 16px 0" alignItems="center">
              <i className="fa fa-globe" aria-hidden="true" />{' '}
              <BodyText>www.studentwebsite.com</BodyText>
            </FlexContainer>
            <Styled.ShowMobileOnly>
              <ContainerBase maxWidth="140px" margin="0 auto 0">
                <Styled.SocialImage src="img/fb_image.png" />
                <Styled.SocialImage src="img/instagram_image.png" />
                <Styled.SocialImage src="img/twitter_image.png" />
                <Styled.SocialImage src="img/linkdin_image.png" />
              </ContainerBase>
            </Styled.ShowMobileOnly>
          </Styled.DetailsWrapper>

          <Styled.ShowDesktopOnly>
            <Button
              type="primary"
              width="100px"
              borderRadius="sm"
              height="45px"
              size="sm"
              margin="0"
            >
              Edit
            </Button>
            <div>
              <Styled.SocialImage src="img/fb_image.png" />
              <Styled.SocialImage src="img/instagram_image.png" />
              <Styled.SocialImage src="img/twitter_image.png" />
              <Styled.SocialImage src="img/linkdin_image.png" />
            </div>
          </Styled.ShowDesktopOnly>
        </Styled.ProfileDetails>
      </Styled.ProfileWrapper>

      <Styled.ProfileInfoPageWrapper>
        <Styled.Tab
          activeTab={activeTab === 'learning'}
          onClick={() => setActiveTab('learning')}
        >
          Learning
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'inbox'}
          onClick={() => setActiveTab('inbox')}
        >
          Inbox
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'billing'}
          onClick={() => setActiveTab('billing')}
        >
          Billing
        </Styled.Tab>
        <Styled.Tab
          activeTab={activeTab === 'preferences'}
          onClick={() => setActiveTab('preferences')}
        >
          Preferences
        </Styled.Tab>
      </Styled.ProfileInfoPageWrapper>
      {isActiveBilling && <Billing />}
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  user: state.user.loginProviderData,
});

export default connect(mapStateToProps)(Profile);
