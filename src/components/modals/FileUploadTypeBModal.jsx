import React from 'react';
import PropTypes from 'prop-types';
import FileUploadModalTypeBContainer from '@components/modals/containers/FileUploadModalTypeBContainer';


const FileUploadTypeBModal = ({ closeModal }) => {
  return (
    <FileUploadModalTypeBContainer closeModal={closeModal} />
  );
};

FileUploadTypeBModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default FileUploadTypeBModal;
