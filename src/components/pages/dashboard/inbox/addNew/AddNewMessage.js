import React, { useState, memo, useEffect } from 'react';
import Styled from './AddNewMessagestyles';
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field } from 'formik';
import AdminInput from '../../../../foundation/input/AdminInput';
import AdminTextArea from '../../../../foundation/textarea/AdminTextArea';
import AdminUploadImage from '../../../../foundation/pictureUploader/PictureUploader';
import Button from '../../../../foundation/button/Button';
import { userActions, resourceActions } from '../../../../../store/actions';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['displayname'];

const emails = [
  {
    id: 1,
    user: {
      name: 'Mathieu',
    },
    subject: 'Hi!',
  },
  {
    id: 2,
    user: {
      name: 'Bruno',
    },
    subject: 'javascript',
  },
  {
    id: 3,
    user: {
      name: 'you can search for me using a regex : `java$`',
    },
    subject: 'java',
  },
  {
    id: 4,
    user: {
      name: 'you can search for me using a regex : `java$`',
    },
    subject: 'java',
  },
];

let AddNewMessage = ({ dispatch, setNewAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(userActions.fetchAllUsersPublicInfo.request());
  }, [setNewAdd]);

  const filteredEmails = emails.filter(email => {
    console.log(searchTerm);
    return email.user.name.indexOf(searchTerm) !== -1;
  });

  const searchUpdated = term => {
    console.log(term);
    setSearchTerm(term);
  };
  return (
    <div>
      <Styled.FilterWrapper>
        <SearchInput className="search-input" onChange={searchUpdated} />
        {!searchTerm &&
          filteredEmails.map(email => {
            return (
              <div
                style={{
                  padding: '10px 0px',
                  backgroundColor: 'green',
                  position: 'absolute',
                  zIndex: 500,
                }}
                key={email.id}
              >
                <div className="from">{email.user.name}</div>
              </div>
            );
          })}
      </Styled.FilterWrapper>
      <Formik
        initialValues={initialFormValues}
        enableReinitialize={true}
        //  validationSchema={profileFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(resourceActions.createMessage.request({ data: values }));
          setTimeout(() => setSubmitting(false), 1000);
        }}
      >
        {({ values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Styled.InputRow>
              <AdminInput
                name="memberId"
                type="text"
                label="Enter Member ID(Name / Email / Phone)"
                width="60%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
                noMargin="0"
              />
              <AdminUploadImage width="40%" label="Attachements" />
            </Styled.InputRow>
            <Styled.InputRow>
              <AdminInput
                name="subject"
                type="text"
                label="Subject"
                width="60%"
                backgroundColor="white"
                placeholder="Enter name,email or phone"
              />
            </Styled.InputRow>

            <Styled.InputRow>
              <AdminTextArea
                name="message"
                rows="10"
                cols="110"
                component="textarea"
                label="Type Your Message( Login details, portal links and guidelines)"
                width="100%"
                height="170px"
                backgroundColor="white"
                noMargin="0"
              />
            </Styled.InputRow>
            <Styled.ButtonWrapper>
              <Button
                type="primary"
                width="200px"
                borderRadius="sm"
                height="45px"
                size="sm"
              >
                Send
              </Button>

              <Button
                width="200px"
                height="48px"
                type="action"
                fontSize="20px"
                borderRadius="sm"
                onClick={() => setNewAdd(false)}
              >
                Cancel
              </Button>
            </Styled.ButtonWrapper>
          </form>
        )}
      </Formik>
    </div>
  );
};

const initialFormValues = {
  memberId: '',
  subject: '',
  message: '',
};

export default connect()(AddNewMessage);
