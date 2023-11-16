import React from 'react';
import PropTypes from 'prop-types';
import FileUploadModalContainer from './containers/FileUploadModalContainer';


const FileUploadModal = ({ closeModal }) => {
  return (
    <FileUploadModalContainer closeModal={closeModal} />
  );
};

FileUploadModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default FileUploadModal;
