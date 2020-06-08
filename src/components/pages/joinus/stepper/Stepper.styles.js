import styled from 'styled-components';

const Step = styled.div`
  position: relative;
  width: 25%;
  border-bottom: 2px solid ${({ active }) => (active ? 'yellow' : 'white')};
  height: 25px;
  &:first-child {
    width: 25px;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? 'yellow' : 'white')};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 11px;
  color: black;
`;

const Label = styled.div`
  position: absolute;
  right: 0;
  top: 42px;
  color: white;
  font-weight: bold;
  font-size: 32px;
`;

export default {
  Step,
  Circle,
  Label,
};
