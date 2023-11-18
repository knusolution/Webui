import React from 'react';
import PropTypes from 'prop-types';
import FileUploadModalTypeAContainer from '@components/modals/containers/FileUploadModalTypeAContainer';


const FileUploadTypeAModal = ({ closeModal }) => {
  return (
    <FileUploadModalTypeAContainer closeModal={closeModal} />
  );
};

FileUploadTypeAModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default FileUploadTypeAModal;
