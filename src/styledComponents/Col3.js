import styled from 'styled-components';
import { TableRowColumn } from 'material-ui/Table';

const stc = styled(TableRowColumn)`
  width: 0%
  @media screen and (min-width: 600px) {
    width: 60%;
  }
`;

export default stc;
