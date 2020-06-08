import styled from 'styled-components';

const Wrapper = styled.div`
  //
`;

const Step = styled.div`
  position: relative;
  width: 25%;
  border-bottom: 2px solid white;
  height: 25px;
  &:first-child {
    width: 25px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 11px;
  color: black;
`;

export default {
  Wrapper,
  Step,
  Circle,
};
