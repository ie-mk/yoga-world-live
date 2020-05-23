import React from 'react';
import Styled from './DashboardItem.styles';
import ContainerBase from '../../../foundation/ContainerBase';

const DashBoardItem = ({ data }) => {
  const items = Object.values(data);
  const ids = Object.keys(data);

  return (
    <Styled.ItemWrapper>
      <Styled.TitleContainer>{data.title}</Styled.TitleContainer>
      <Styled.CountContainer>{data.count}</Styled.CountContainer>
      {data.Active && data.New ? (
        <Styled.RowContainer>
          <span>
            <Styled.grayContainer> New </Styled.grayContainer>
            <Styled.NewContainer>{data.New}</Styled.NewContainer>
          </span>
          <span>
            <Styled.grayContainer> Active </Styled.grayContainer>
            <Styled.NewContainer>{data.Active}</Styled.NewContainer>
          </span>
        </Styled.RowContainer>
      ) : (
        ''
      )}
    </Styled.ItemWrapper>
  );
};

export default DashBoardItem;
