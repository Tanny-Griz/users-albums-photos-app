import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({children, 
                isShowModal, 
                handleHideModal}) => {

    const hideModal = (e) => {
        if (e.target.className == 'modal-box') {
            handleHideModal();
            // setId && setId(null);
        }
    }

    return (
        (isShowModal && <div className="modal-box" 
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
    isShowModal: PropTypes.bool.isRequired,
    handleHideModal: PropTypes.func.isRequired
}

export default Modal