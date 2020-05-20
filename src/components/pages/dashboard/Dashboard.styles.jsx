import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 915px);
  background-color: white;
`;

const MenuWrapper = styled.div`
  height: 100vh;
  background: transparent linear-gradient(180deg, #1a2036 0%, #191f37 100%) 0%
    0% no-repeat padding-box;
  color: white;
`;

export default {
  Wrapper,
  MenuWrapper,
};
