import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import scss from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'outlined';
}

const Button: FC<IButton> = ({ children, variant = 'contained', className, ...rest }) => {
    return (
        <button className={clsx(scss.button, scss[variant], className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
