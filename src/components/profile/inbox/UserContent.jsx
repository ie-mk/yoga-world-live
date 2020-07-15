import React, { useState, useEffect } from 'react';

import Styled from './Inbox.styles';

import { connect } from 'react-redux';
import { userActions, resourceActions } from '../../../store/actions';
import moment from 'moment';
import { getAllUsersPublicInfo } from '../../../store/selectors';

const UserContent = ({
  dispatch,
  allUsersPublicInfo,
  messages,
  messageid,
  onClick,
}) => {
  const item = messages[messageid];

  useEffect(() => {
    dispatch(userActions.fetchAllUsersPublicInfo.request());
  }, []);

  console.log('allUsersPublicInfo', allUsersPublicInfo);
  console.log('item.senderId', item.senderId);
  const userinfo = allUsersPublicInfo && allUsersPublicInfo[item.senderId];
  console.log('userinfo--', userinfo);

  {
    /* <UserContent
                           key={i}
                           onClick={() => getMessage(messageid)}
                           messageid={messageid}
                           messages={messages}
                           />
              )
            })
          }
        */
  }

  return (
    <Styled.ContentWrapper onClick={() => onClick}>
      <Styled.Image src={userinfo.profileImage || userinfo.photoURL} />
      <Styled.Wrapper>
        <Styled.RowContainer>
          <Styled.TextContainer fontSize="text">
            {userinfo.displayName}
          </Styled.TextContainer>
          <Styled.TextContainer fontSize="textMobile">
            {moment(item.date).format('ll')}
          </Styled.TextContainer>
        </Styled.RowContainer>
        <Styled.TextContainer fontSize="textS">
          {item.message && item.message.length > 25
            ? item.message.substring(0, 22) + '...'
            : item.message}
        </Styled.TextContainer>
      </Styled.Wrapper>
    </Styled.ContentWrapper>
  );
};

const mapStateToProps = state => ({
  messages: state.messages.data,
  allUsersPublicInfo: getAllUsersPublicInfo(state),
});

export default connect(mapStateToProps)(UserContent);
