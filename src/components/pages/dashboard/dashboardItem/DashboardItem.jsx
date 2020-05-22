import React from 'react';
import Styled from './DashboardItem.styles';
import ContainerBase from '../../../foundation/ContainerBase';

const DashBoardItem = ({ data }) => {
  const items = Object.values(data);
  const ids = Object.keys(data);

  return (
    <Styled.ItemWrapper>
      <div>
        <Styled.TextContainer>
          <strong>{data.title}</strong>
        </Styled.TextContainer>
        <Styled.CountContainer>
          <strong>{data.count}</strong>
        </Styled.CountContainer>
        {data.Active && data.New ? (
          <div>
            <Styled.grayContainer> New </Styled.grayContainer>
            <Styled.NewContainer>
              {' '}
              <strong>{data.New}</strong>
            </Styled.NewContainer>

            <Styled.grayContainer> Active </Styled.grayContainer>
            <Styled.NewContainer>
              {' '}
              <strong>{data.Active}</strong>
            </Styled.NewContainer>
          </div>
        ) : (
          ''
        )}
      </div>
    </Styled.ItemWrapper>
  );
};

export default DashBoardItem;
