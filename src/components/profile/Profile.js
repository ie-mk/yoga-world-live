import React, { useState } from 'react';
import Styled from './Profile.styles';
import ContainerBase from '../foundation/ContainerBase';
import { connect } from 'react-redux';
import Button from '../foundation/button/Button';
import HeroTitle from '../foundation/typography/HeroTitle';

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
            <HeroTitle margin="0" text="Student Name" />
            <Styled.Role>Frontend Developer</Styled.Role>
            <Styled.Place>
              <i className="fa fa-map-marker" aria-hidden="true" /> Wembley
            </Styled.Place>
            <Styled.Place>
              <i className="fa fa-globe" aria-hidden="true" />{' '}
              www.studentwebsite.com
            </Styled.Place>
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
              <Styled.SocialImage src="img/image 9.png" />
              <Styled.SocialImage src="img/image 10.png" />
              <Styled.SocialImage src="img/image 11.png" />
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
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  user: state.user.loginProviderData,
});

export default connect(mapStateToProps)(Profile);
