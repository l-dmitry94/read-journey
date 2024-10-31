import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import scss from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'outlined';
}

const Button: FC<IButton> = ({ variant = 'contained', className, children }) => {
    return <button className={clsx(scss.button, scss[variant], className)}>{children}</button>;
};

export default Button;
