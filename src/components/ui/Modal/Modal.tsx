import { FC } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import { IChildren } from 'types/children.types';

import Icon from '../Icon';

import scss from './Modal.module.scss';

export interface IModal extends IChildren {
    isOpen: boolean;
    onClose: () => void;
    isSuccess?: boolean;
}

const Modal: FC<IModal> = ({ isOpen, onClose, isSuccess, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            closeTimeoutMS={300}
            ariaHideApp={false}
            bodyOpenClassName={scss.bodyOpen}
            overlayClassName={scss.overlay}
            className={clsx(scss.modal, isSuccess && scss.success)}
        >
            <button type="button" className={scss.closeButton} onClick={onClose}>
                <Icon variant="close" className={scss.closeIcon} />
            </button>
            {children}
        </ReactModal>
    );
};

export default Modal;
