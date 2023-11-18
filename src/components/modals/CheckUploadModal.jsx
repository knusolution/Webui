import React from 'react';
import PropTypes from 'prop-types';
import CheckUploadModalContainer from './containers/CheckUploadModalContainer';


const CheckUploadModal = ({ closeModal }) => {
  return (
    <CheckUploadModalContainer closeModal={closeModal} />
  );
};

CheckUploadModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CheckUploadModal;
