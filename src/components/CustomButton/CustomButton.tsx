import { FC } from 'react';
import clsx from 'clsx';
import { ICustomButton, Variant } from './CustomButton.types';
import scss from './CustomButton.module.scss';

const CustomButton: FC<ICustomButton> = ({ variant, children, ...rest }) => {
    return (
        <button
            className={clsx(
                scss.button,
                variant === Variant.Primary && scss.buttonPrimary,
                variant === Variant.Secondary && scss.buttonSecondary
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

export default CustomButton;
