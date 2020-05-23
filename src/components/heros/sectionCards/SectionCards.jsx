import React from 'react';
import Styled from './SectionCards.styles';
import Grid from '../../foundation/Grid';
import SectionTitle from '../../foundation/typography/SectionTitle';
import ContainerBase from '../../foundation/ContainerBase';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';

const SectionCards = () => {
  return (
    <CenteredFlexContainer marginTop="xxl">
      <SectionTitle text="How it works" />
      <Grid
        columns="1fr 1fr"
        mediaColConfig={{
          aboveMobileLarge: 'minmax(0, 1fr) 1fr',
        }}
      >
        <div>Card1</div>
        <div>Card2</div>
      </Grid>
    </CenteredFlexContainer>
  );
};

export default SectionCards;
