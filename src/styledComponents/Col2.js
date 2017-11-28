import styled from 'styled-components';
import { TableRowColumn } from 'material-ui/Table';

const stc = styled(TableRowColumn)`
  width: 50%;
  @media screen and (min-width: 600px) {
    width: 20%;
  }
`;

export default stc;
