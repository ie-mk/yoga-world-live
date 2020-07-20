import React, { useState, useEffect } from 'react';
import ContainerBase from '../../foundation/ContainerBase';
import { fontSizeMap, spacing } from '../../../constants/styles';
import Grid from '../../foundation/Grid';
import Styled from './Inbox.styles';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import { userActions, resourceActions } from '../../../store/actions';
import moment from 'moment';
import Modal from '../../modal/Modal';
import AddNewMessage from '../../../components/pages/dashboard/inbox/addNew/AddNewMessage';
import ReplyMessage from '../../../components/pages/dashboard/inbox/addReply/ReplyMessage';
import { getAllUsersPublicInfo } from '../../../store/selectors';
import MessageModel from './messageModel/MessageModel';

const Inbox = ({ dispatch, profile, allUsersPublicInfo, messages }) => {
  const [message, setMessage] = useState(null);
  const [reply, setReply] = useState(false);
  const [messageData, setMessageData] = useState('');
  const [MobileModelDisplay, setMobileModelDisplay] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const handleReply = () => {
    setReply(true);
  };
  const getMessage = (messageid, userinfo) => {
    const item = messages[messageid];
    console.log('window.screen.width-- ', window.screen.width);
    setMessage(item.message);
    setMessageData(item);
    if (window.screen.width < 700) {
      setMobileModelDisplay(true);
      setUserInfo(userinfo);
      console.log('typeof userinfo', typeof userinfo, userinfo);
    }
  };

  const uid = profile && profile.uid;

  useEffect(() => {
    dispatch(
      resourceActions.fetchMessages.request({
        queries: {
          receiverId: ['==', uid],
        },
      }),
    );
  }, [uid]);

  useEffect(() => {
    dispatch(userActions.fetchAllUsersPublicInfo.request());
  }, []);
  var defaultImage = '/svg/icon_profile.svg';
  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowTabletLarge: {
          margin: '30px 0 0 0',
        },
      }}
    >
      <Styled.RowContainer>
        <Styled.ItemWrapper>
          {messages &&
            Object.keys(messages).map((messageid, i) => {
              const item = messages[messageid];

              const userinfo =
                allUsersPublicInfo && allUsersPublicInfo[item.senderId];

              var src = '/svg/icon_profile.svg';

              if (!userinfo) return null;

              return (
                <Styled.ContentWrapper
                  key={i}
                  onClick={() => getMessage(messageid, userinfo)}
                >
                  <Styled.Image
                    src={userinfo.profileImage || userinfo.photoURL || src}
                    // src={src}
                  />
                  <Styled.Wrapper>
                    <Styled.RowContainer>
                      <Styled.TextContainer fontSize="text" fontWeight="500">
                        {userinfo.displayName}
                      </Styled.TextContainer>
                      <Styled.TextContainer fontSize="textMobile" opacity="0.5">
                        {moment(item.date).format('ll')}
                      </Styled.TextContainer>
                    </Styled.RowContainer>
                    <Styled.TextContainer fontSize="textS" paddingTop="xxS">
                      {item.message && item.message.length > 25
                        ? item.message.substring(0, 22) + '......'
                        : item.message}
                    </Styled.TextContainer>
                  </Styled.Wrapper>
                </Styled.ContentWrapper>
              );
            })}
        </Styled.ItemWrapper>
        <Styled.MessageBodyWrapper>
          {message && <Styled.MessageBody>{message}</Styled.MessageBody>}

          {message && (
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                size="lg"
                padding="10px 30px"
                maxWidth="280px"
                margin="0"
                onClick={() => handleReply()}
              >
                REPLY
              </Button>
            </Styled.ButtonWrapper>
          )}
        </Styled.MessageBodyWrapper>
      </Styled.RowContainer>
      <ContainerBase>
        {reply && (
          <Modal
            styles={{
              width: '800px',
              height: 'auto',
              color: 'black',
            }}
            fontSize={fontSizeMap.h4}
            marginTop={spacing.lg}
            fontWeight="700"
            onClose={() => setReply(false)}
            title="Reply"
          >
            <ReplyMessage setReply={setReply} messageData={messageData} />
          </Modal>
        )}
      </ContainerBase>
      <ContainerBase>
        {MobileModelDisplay && (
          <MessageModel
            styles={{
              width: '100vw',
              height: 'auto',
              color: 'black',
            }}
            fontSize={fontSizeMap.h4}
            marginTop={spacing.lg}
            fontWeight="700"
            onClose={() => setReply(false)}
            title={userInfo.displayName}
            image={defaultImage}
            message={message}
            onClose={() => setMobileModelDisplay(false)}
          >
            {/* <ReplyMessage setReply={setReply} messageData={messageData} /> */}
          </MessageModel>
        )}
      </ContainerBase>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  messages: state.messages.data,
  allUsersPublicInfo: getAllUsersPublicInfo(state),
});

export default connect(mapStateToProps)(Inbox);
