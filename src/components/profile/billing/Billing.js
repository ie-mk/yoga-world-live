import React from 'react';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../foundation/learningPathCard/LearningPathCard';
import CardTitle from '../../foundation/typography/CardTitle';
import BodyText from '../../foundation/typography/BodyText';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import ContainerBase from '../../foundation/ContainerBase';
import { background, spacing } from '../../../constants/styles';
import Styled from './Billing.styles';
import Grid from '../../foundation/Grid';
import Button from '../../foundation/button/Button';

const Billig = () => {
  const { t } = useTranslation();

  return (
    <ContainerBase marginTop="xxl">
      <Styled.BillingWrapper>
        <CardTitle margin="0" text="Your Membership" />
        <Styled.GridWrapper>
          <Grid
            columns="1fr 1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <div>
              <BodyText>MemberShip Type</BodyText>
              <Styled.MembershipType>
                <BodyText color="#0EC9B0" fontWeight="bold">
                  Paid
                </BodyText>
                <Button
                  className="mobileView"
                  type="primary"
                  width="80px"
                  borderRadius="sm"
                  height="60px"
                  size="sm"
                  mobileSameSize={true}
                  margin="0"
                >
                  Change
                </Button>
                <Button
                  className="desktopView"
                  type="primary"
                  width="160px"
                  borderRadius="sm"
                  height="60px"
                  size="sm"
                  mobileSameSize={true}
                  margin="0"
                >
                  Change
                </Button>
              </Styled.MembershipType>
            </div>

            <div>
              <BodyText>MemberShip Fee</BodyText>
              <BodyText color="#0EC9B0" fontWeight="bold" paddingTop="44px">
                € 3999/ year{' '}
              </BodyText>
            </div>
            <div>
              <BodyText>Last Payment Date</BodyText>
              <BodyText color="#0EC9B0" fontWeight="bold" paddingTop="44px">
                March 23,2020{' '}
              </BodyText>
            </div>
          </Grid>
        </Styled.GridWrapper>
      </Styled.BillingWrapper>
    </ContainerBase>
  );
};

export default Billig;
