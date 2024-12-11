import { FC } from 'react';
import ReactModal from 'react-modal';
import { IChildren } from 'types/children.types';

import Icon from '../Icon';

import scss from './Modal.module.scss';

export interface IModal extends IChildren {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<IModal> = ({ isOpen, onClose, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
            ariaHideApp={false}
            bodyOpenClassName={scss.bodyOpen}
            overlayClassName={scss.overlay}
            className={scss.modal}
        >
            <button type="button" className={scss.closeButton} onClick={onClose}>
                <Icon variant="close" className={scss.closeIcon} />
            </button>
            {children}
        </ReactModal>
    );
};

export default Modal;
