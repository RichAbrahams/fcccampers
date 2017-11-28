import styled from 'styled-components';

const stc = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (min-width: 500px) {
    width: 64px;
    height: 64px;
  }
  @media screen and (min-width: 750px) {
    width: 96px;
    height: 96px;
  }
`;

export default stc;
