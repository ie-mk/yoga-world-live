import React from 'react';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../foundation/learningPathCard/LearningPathCard';
import CardTitle from '../../foundation/typography/CardTitle';
import BodyHeader from '../../foundation/typography/BodyHeader';
import BodyText from '../../foundation/typography/BodyText';
import PathTitle from '../../foundation/typography/PathTitle';
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
              <BodyHeader text="MemberShip Type" />
              <Styled.MembershipType>
                <BodyHeader margin="0" color="#0EC9B0" text="Paid" />
                <Button
                  className="mobileView"
                  type="primary"
                  width="80px"
                  borderRadius="mobile"
                  height="30px"
                  size="mobile"
                  mobileSameSize={true}
                  padding="0"
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
                  margin="0"
                  mobileSameSize={true}
                >
                  Change
                </Button>
              </Styled.MembershipType>
            </div>

            <div>
              <BodyHeader text="MemberShip Fee" />
              <BodyHeader
                margin="44px 0 0 0"
                color="#0EC9B0"
                text="€ 3999/ year"
              />
            </div>
            <div>
              <BodyHeader text="Last Payment Date" />
              <BodyHeader
                margin="44px 0 0 0"
                color="#0EC9B0"
                text="March 23,2020"
              />
            </div>
          </Grid>
        </Styled.GridWrapper>

        <CardTitle margin="113px 0 0 0" text="Invoices" />
        <Styled.GridWrapper>
          <Grid
            columns="1fr 1fr 1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr 1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <div>
              <BodyHeader margin="0" text="Description" />

              <PathTitle margin="44px 0 0 0" text="MemberShip Fee" />
            </div>

            <div>
              <BodyHeader margin="0" text="Amount" />
              <PathTitle margin="44px 0 0 0" text="€ 3999" />
            </div>
            <div>
              <BodyHeader margin="0" text="Date" />
              <PathTitle margin="44px 0 0 0" text="March 23,2020" />
            </div>
            <div>
              <Button
                className="desktopView"
                type="secondary"
                width="160px"
                borderRadius="sm"
                height="60px"
                size="sm"
                mobileSameSize={true}
                margin="44px 0 0 0"
              >
                View Invoice
              </Button>
              <Button
                className="mobileView"
                type="secondary"
                width="80px"
                borderRadius="mobile"
                height="30px"
                size="mobile"
                mobileSameSize={true}
                margin="0 0 0 0"
                padding="0"
              >
                View Invoice
              </Button>
            </div>
          </Grid>
        </Styled.GridWrapper>
        <CardTitle margin="113px 0 0 0" text="Payment Methods" />
        <Styled.GridWrapper>
          <Grid
            columns="1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <Styled.CardWrapper>
              <Styled.CardImage src="img/visaImage.png" />
              <CardTitle
                width="500px"
                fontWeight="200"
                text="xxxx xxxx xxxx 3267"
              />
            </Styled.CardWrapper>

            <Button
              className="desktopView"
              type="secondary"
              width="160px"
              borderRadius="sm"
              height="60px"
              size="sm"
              mobileSameSize={true}
              margin="44px 0 0 0"
            >
              Remove
            </Button>
            <Button
              className="mobileView"
              type="secondary"
              width="80px"
              borderRadius="mobile"
              height="30px"
              size="mobile"
              mobileSameSize={true}
              margin="0"
              padding="0"
            >
              Remove
            </Button>

            <Button
              className="desktopView"
              type="primary"
              width="300px"
              borderRadius="sm"
              height="60px"
              size="sm"
              mobileSameSize={true}
              margin="0"
            >
              Add Payment Method
            </Button>
            <Button
              className="mobileView"
              type="primary"
              width="150px"
              borderRadius="mobile"
              height="30px"
              size="mobile"
              mobileSameSize={true}
              margin="0"
              padding="0"
            >
              Add Payment Method
            </Button>
          </Grid>
        </Styled.GridWrapper>
        <CardTitle margin="113px 0 0 0" text="Cancel Membership" />
        <PathTitle
          margin="29px 0 0 0"
          text="you will loss access to your courses and program"
        />
        <Button
          className="desktopView"
          type="secondary"
          width="300px"
          borderRadius="sm"
          height="60px"
          size="sm"
          mobileSameSize={true}
          margin="54px 0 0 0"
        >
          Cancel Membership
        </Button>
        <Button
          className="mobileView"
          type="secondary"
          width="150px"
          borderRadius="mobile"
          height="30px"
          size="mobile"
          mobileSameSize={true}
          margin="54px 0 0 0"
          padding="0"
        >
          Cancel Membership
        </Button>
      </Styled.BillingWrapper>
    </ContainerBase>
  );
};

export default Billig;
