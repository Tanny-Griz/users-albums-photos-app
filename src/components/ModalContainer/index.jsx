import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({children, 
                showModal, 
                setShowModal,
                setId}) => {

    const hideModal = (e) => {
        if (e.target.className == 'modal-box') {
            setShowModal(false);
            setId && setId(null);
        }
    }

    return (
        (showModal && <div className="modal-box" 
                           onClick={hideModal}>
                           {children}
                      </div>)
    )
}

Modal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
}

export default Modal