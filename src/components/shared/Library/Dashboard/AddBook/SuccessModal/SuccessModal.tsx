import { success_1x, success_2x } from 'assets/img/success';

import scss from './SuccessModal.module.scss';

const SuccessModal = () => {
    return (
        <div className={scss.successModal}>
            <img
                src={success_1x}
                srcSet={`${success_1x} 1x, ${success_2x} 2x`}
                alt="Success"
                className={scss.image}
            />
            <h3 className={scss.title}>Good job</h3>
            <p className={scss.text}>
                Your book is now in <span className={scss.highlight}>the library!</span> The joy
                knows no bounds and now you can start your training
            </p>
        </div>
    );
};

export default SuccessModal;
