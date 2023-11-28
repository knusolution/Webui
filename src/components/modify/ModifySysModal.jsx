import React from 'react';
import PropTypes from 'prop-types';
import ModifySysModalContainer from '@components/modify/containers/ModifySysModalContainer';


const ModifySysModal = ({ closeModal }) => {
    return (
      <ModifySysModalContainer closeModal={closeModal} />
    );
  };

ModifySysModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default ModifySysModal;
