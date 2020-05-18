import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Styled from './AppBar.styles';
import api from '../../api';
import Button from '../foundation/button/Button';
import styled from 'styled-components';
import { userActions } from '../../store/actions';
import { colors } from '../../constants/styles';
import { lightenDarkenColor } from '../../utils/colors';
import { useTranslation } from 'react-i18next';
import MenuLink from '../foundation/MenuLink';
import ContainerBase from '../foundation/ContainerBase';
import Logo from '../foundation/Logo';

const LogoutButton = styled(Button)`
  margin-left: 10px;
`;

const AppBar = ({ user, dispatch, userLanguage }) => {
  const handleLogout = () => {
    api.user.logout && api.user.logout();
    dispatch(userActions.resetUser());
  };

  const { t } = useTranslation();

  return (
    <ContainerBase
      id="appBar"
      padding="md"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      width="100%"
      boxSizing="border-box"
      position="absolute"
      top="0"
      height="65px"
      zIndex="99"
    >
      <Logo title="LOGO" width="200px" />
      <ContainerBase display="flex">
        <Styled.Wrapper>
          <select
            value={userLanguage || 'en'}
            onChange={e => {
              dispatch(userActions.setLanguage(e.target.value));
            }}
          >
            <option value="en">EN</option>
            <option value="lt">LT</option>
          </select>

          {user && user.uid && (
            <MenuLink href="/dashboard">
              <i className="fa fa-user" />
            </MenuLink>
          )}
          <MenuLink href="/stories">Story Book</MenuLink>
          {user && user.uid ? (
            <LogoutButton type="secondary" onClick={handleLogout}>
              {t('Logout')}
            </LogoutButton>
          ) : (
            <MenuLink
              dataTest="go-to-login-page"
              href="/login"
              text={t('login')}
            />
          )}
        </Styled.Wrapper>
      </ContainerBase>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  user: state.user && state.user.loginProviderData,
  userLanguage: state.user && state.user.userLanguage,
});

export default connect(mapStateToProps)(AppBar);
