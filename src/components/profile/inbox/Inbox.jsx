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
import UserContent from './UserContent';
import { getAllUsersPublicInfo } from '../../../store/selectors';

const Inbox = ({ dispatch, profile, allUsersPublicInfo, messages }) => {
  const [message, setMessage] = useState(null);
  const [reply, setReply] = useState(false);
  const [messageData, setMessageData] = useState('');

  const handleReply = () => {
    setReply(true);
  };
  const getMessage = messageid => {
    const item = messages[messageid];
    setMessage(item.message);
    setMessageData(item);
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

  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowTabletLarge: {
          margin: '30px 0 0 0',
        },
      }}
    >
      <Grid
        columns="1fr 2fr"
        mediaConfig={{
          aboveTabletLarge: {
            'grid-template-columns': '1fr 2fr',
          },
          belowTabletLarge: {
            'grid-gap': spacing.xS,
          },
        }}
        gridGap={spacing.xls}
      >
        <Styled.ItemWrapper>
          {messages &&
            Object.keys(messages).map((messageid, i) => {
              const item = messages[messageid];

              const userinfo =
                allUsersPublicInfo && allUsersPublicInfo[item.senderId];

              return (
                <Styled.ContentWrapper
                  key={i}
                  onClick={() => getMessage(messageid)}
                >
                  <Styled.Image
                  //src={userinfo.profileImage || userinfo.photoURL}
                  />
                  <Styled.Wrapper>
                    <Styled.RowContainer>
                      <Styled.TextContainer fontSize="text">
                        kk
                        {/* {userinfo.displayName} */}
                      </Styled.TextContainer>
                      <Styled.TextContainer fontSize="textMobile">
                        {moment(item.date).format('ll')}
                      </Styled.TextContainer>
                    </Styled.RowContainer>
                    <Styled.TextContainer fontSize="textS">
                      {item.message.length > 25
                        ? item.message.substring(0, 22) + '......'
                        : item.message}
                    </Styled.TextContainer>
                  </Styled.Wrapper>
                </Styled.ContentWrapper>
              );
            })}
        </Styled.ItemWrapper>
        <div>
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
        </div>
      </Grid>
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
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  messages: state.messages.data,
  allUsersPublicInfo: getAllUsersPublicInfo(state),
});

export default connect(mapStateToProps)(Inbox);
