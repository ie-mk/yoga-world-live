import React from 'react';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../foundation/learningPathCard/LearningPathCard';
import CardTitle from '../../foundation/typography/CardTitle';
import BodyHeader from '../../foundation/typography/BodyHeader';
import BodyText from '../../foundation/typography/BodyText';
import PathTitle from '../../foundation/typography/PathTitle';
import CenteredFlexContainer from '../../foundation/CenteredFlexContainer';
import ContainerBase from '../../foundation/ContainerBase';
import { background, fontSizeMap, spacing } from '../../../constants/styles';
import Styled from './Billing.styles';
import Grid from '../../foundation/Grid';
import Button from '../../foundation/button/Button';

const CustomButton = ({
  customMinWidth,
  customMargin,
  customMobileMinWidth,
  ...props
}) => (
  <Button
    type="secondary"
    borderRadius="mobile"
    size="lg"
    margin={customMargin}
    padding="20px 30px"
    minWidth={customMinWidth}
    mediaConfig={{
      belowDesktop: {
        padding: '10px 15px',
        fontSize: fontSizeMap.buttonMobile,
        margin: props.margin ? props.margin : '0',
        minWidth: customMobileMinWidth ? customMobileMinWidth : '100px',
      },
    }}
    {...props}
  >
    {props.children}
  </Button>
);

const CustomBodyHeader = ({ margin, ...props }) => (
  <BodyHeader
    mediaConfig={{
      belowDesktop: {
        margin: 0,
      },
    }}
    {...props}
  />
);

const CustomPathTitle = props => (
  <PathTitle
    mediaConfig={{
      belowDesktop: {
        margin: 0,
      },
    }}
    {...props}
  />
);

const CustomCardTitle = ({ customMargin, ...props }) => (
  <CardTitle
    margin={customMargin}
    fontWeight="500"
    mediaConfig={{
      belowDesktop: {
        margin: '0 0 11px 0',
      },
    }}
    {...props}
  />
);

const Billig = () => {
  const { t } = useTranslation();

  return (
    <ContainerBase marginTop="xxl">
      <Styled.BillingWrapper>
        <CustomCardTitle margin="0 0 22px 0" text="Your Membership" />
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
            <CustomBodyHeader text="MemberShip Type" />
            <Styled.MembershipType>
              <CustomBodyHeader color="#0EC9B0" text="Paid" />
              <CustomButton
                margin="11px 0 11px 0"
                customMobileMinWidth="auto"
                type="primary"
              >
                Change
              </CustomButton>
            </Styled.MembershipType>
          </div>

          <div>
            <CustomBodyHeader text="MemberShip Fee" />
            <BodyHeader
              margin="22px 0 0 0"
              color="#0EC9B0"
              text="€ 3999/ year"
            />
          </div>
          <div>
            <CustomBodyHeader text="Last Payment Date" />
            <CustomBodyHeader color="#0EC9B0" text="March 23,2020" />
          </div>
        </Grid>
        <CustomCardTitle margin="0 0 22px 0" text="Invoices" />

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
            <CustomBodyHeader text="Description" />

            <CustomPathTitle text="MemberShip Fee" />
          </div>

          <div>
            <CustomBodyHeader text="Amount" />
            <CustomPathTitle text="€ 3999" />
          </div>
          <div>
            <CustomBodyHeader text="Date" />
            <CustomPathTitle text="March 23,2020" />
          </div>
          <div>
            <CustomButton customMargin="70px 0 0 0" customMinWidth="200px">
              View Invoice
            </CustomButton>
          </div>
        </Grid>
        <CustomCardTitle margin="0 0 22px 0" text="Payment Methods" />

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
              padding="0 0 0 53px"
              text="xxxx xxxx xxxx 3267"
            />
          </Styled.CardWrapper>
          <div>
            <CustomButton type="secondary" minWidth="180px">
              Remove
            </CustomButton>
          </div>
          <di>
            <CustomButton type="primary">Add Payment Method</CustomButton>
          </di>
        </Grid>
        <CardTitle
          fontWeight="500"
          text="Cancel Membership"
          mediaConfig={{
            belowDesktop: {
              margin: '0 0 11px 0',
            },
          }}
        />

        <CustomPathTitle text="you will loss access to your courses and program" />
        <CustomButton type="secondary" margin="0 0 40px">
          Cancel Membership
        </CustomButton>
      </Styled.BillingWrapper>
    </ContainerBase>
  );
};

export default Billig;
