import React, { useState, useEffect } from 'react';
import ContainerBase from '../../foundation/ContainerBase';
import { fontSizeMap, spacing } from '../../../constants/styles';
import Grid from '../../foundation/Grid';
import Styled from './Inbox.styles';
import Button from '../../foundation/button/Button';
import { connect } from 'react-redux';
import { resourceActions } from '../../../store/actions';
import moment from 'moment';
import Modal from '../../modal/Modal';
import AddNewMessage from '../../../components/pages/dashboard/inbox/addNew/AddNewMessage';
import ReplyMessage from '../../../components/pages/dashboard/inbox/addReply/ReplyMessage';

// const students = {
//   'id_01':{

//    name: 'Keshava',
//    message:'this is javascript',
//    date: 'July 11, 2020'
//   },
//   'id_02': {
//   name: 'Shiva',
//   message:'this is html',
//   date: 'July 11, 2020'
//   },
//   'id_03':{
//   name: 'Rama',
//   message:'this is python',
//   date: 'July 11, 2020'
//   },
//   'id_04':{
//     name: 'Shiva',
//     message:'this is java',
//     date: 'July 11, 2020'
//     },
//     'id_05':  {
//     name: 'Rama',
//     message:'this is react',
//     date: 'July 11, 2020'
//     },
//   }

const Inbox = ({ dispatch, profile, messages }) => {
  const [message, setMessage] = useState(null);
  const [reply, setReply] = useState(false);
  const [messageData, setMessageData] = useState('');

  const handleReply = () => {
    setReply(true);
    // setMessageData(item);
    // TODO
  };
  const getMessage = key => {
    const item = messages[key];
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
            Object.keys(messages).map((key, i) => {
              const item = messages[key];
              return (
                <Styled.ContentWrapper key={i} onClick={() => getMessage(key)}>
                  <Styled.Image
                    src={profile.profileImage || profile.photoURL}
                  />
                  <Styled.Wrapper>
                    <Styled.RowContainer>
                      <Styled.TextContainer fontSize="text">
                        {profile.displayName}
                      </Styled.TextContainer>
                      <Styled.TextContainer fontSize="textMobile">
                        {moment(item.date).format('ll')}
                      </Styled.TextContainer>
                    </Styled.RowContainer>
                    <Styled.TextContainer fontSize="textS">
                      {item.message}
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
        {/* {newAdd && (
          <Modal
            styles={{
              width: '800px',
              height: 'auto',
              color: 'black',
            }}
            fontSize={fontSizeMap.h4}
            marginTop={spacing.lg}
            fontWeight="700"
            onClose={() => setNewAdd(false)}
            title="New Message"
          >
            <AddNewMessage setNewAdd={setNewAdd} />
          </Modal>
        )} */}

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
});

export default connect(mapStateToProps)(Inbox);
