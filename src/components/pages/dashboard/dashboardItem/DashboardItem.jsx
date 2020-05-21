import React from 'react';
import Styled from './DashboardItem.styles';
import ContainerBase from '../../../foundation/ContainerBase';
const DescriptionSection = props => (
  <ContainerBase
    paddingTop="xl"
    paddingBottom="sm"
    display="flex"
    flexDirection="space-between"
    {...props}
  />
);

const DashBoardItem = ({ data }) => {
  const items = Object.values(data);
  const ids = Object.keys(data);

  return (
    <Styled.ItemWrapper>
      <ContainerBase>
        <Styled.TextContainer>{data.title}</Styled.TextContainer>
        <Styled.CountContainer>{data.count}</Styled.CountContainer>
        <Styled.RowContainer>
          {data.New ? (
            <Styled.TextContainer>New {data.New}</Styled.TextContainer>
          ) : (
            ''
          )}
          {data.Active ? (
            <Styled.TextContainer>Active {data.Active}</Styled.TextContainer>
          ) : (
            ''
          )}
        </Styled.RowContainer>
      </ContainerBase>
    </Styled.ItemWrapper>
  );
};

export default DashBoardItem;
