import React from 'react';
import PropTypes from 'prop-types';
import FileUploadModalTypeCContainer from '@components/modals/containers/FileUploadModalTypeCContainer';


const FileUploadTypeCModal = ({ closeModal }) => {
  return (
    <FileUploadModalTypeCContainer closeModal={closeModal} />
  );
};

FileUploadTypeCModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default FileUploadTypeCModal;
