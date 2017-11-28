import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from '../styledComponents/Thumbnail';
import Col1 from '../styledComponents/Col1';
import Col2 from '../styledComponents/Col2';
import Col3 from '../styledComponents/Col3';
import TableRow from '../styledComponents/TableRow';

const getImageUrl = (stream) => {
  if (stream.offline_image_url && !stream.online) {
    return stream.offline_image_url;
  }
  return stream.profile_image_url;
};

const handleClick = (e) => {
  window.open(`https://www.twitch.tv/${e}`);
};

const Row = (props) => {
  const { stream } = props;
  const imageUrl = getImageUrl(stream);
  return (
    <TableRow onClick={() => handleClick(stream.login)}>
      <Col1><Thumbnail src={imageUrl} alt="thumbnail" /></Col1>
      <Col2>{stream.display_name}</Col2>
      <Col3>{stream.description}</Col3>
    </TableRow>
  );
};

Row.propTypes = {
  stream: PropTypes.object,
};

export default Row;
