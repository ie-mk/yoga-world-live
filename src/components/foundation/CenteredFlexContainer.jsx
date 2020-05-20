import React from 'react';
import ContainerBase from '../foundation/ContainerBase';

const CenteredFlexContainer = ({ children, ...props }) => {
  return (
    <ContainerBase
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="md"
      marginBottom="sm"
      {...props}
    >
      {children}
    </ContainerBase>
  );
};

export default CenteredFlexContainer;
