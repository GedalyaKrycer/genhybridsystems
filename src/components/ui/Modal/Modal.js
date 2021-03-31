import React from 'react';
import './modalStyles.scss';
import { FaPlus } from "react-icons/fa";
import { useGHStContext } from '../../../utils/ContextProvider';

const Modal = (props) => {
    const {setModalOpen, modalOpen} = useGHStContext();

    const handleClose = (e) => {
        // Controls event delegation from bubbling
        e.stopPropagation();
        // Closes modal
        setModalOpen(false);
    }

    return (
        <div
            className={modalOpen ? "modal--show" : "modal--hide"}
            onClick={handleClose}
        >
            <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="modal__close"
                    onClick={handleClose}
                ><FaPlus /></span>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;
