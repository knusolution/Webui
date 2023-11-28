import React from 'react';
import PropTypes from 'prop-types';
import FileUploadModalTypeBContainer from '@components/modals/containers/FileUploadModalTypeBContainer';


const FileUploadTypeBModal = ({ closeModal, detailCategories }) => {
  return (
    <FileUploadModalTypeBContainer closeModal={closeModal} detailCategories={detailCategories} />
  );
};

FileUploadTypeBModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    detailCategories: PropTypes.array.isRequired
};

export default FileUploadTypeBModal;
