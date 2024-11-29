import { InputHTMLAttributes, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import clsx from 'clsx';
import { IFormChildren } from 'types/form.types';

import Icon from '../Icon';

import scss from './Input.module.scss';

interface IInput<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'>,
        IFormChildren<T> {
    name: Path<T>;
    label: string;
}
const Input = <T extends FieldValues>({
    register,
    name,
    label,
    type,
    formState,
    ...rest
}: IInput<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className={scss.inputContainer}>
            <div className={clsx(scss.inputWrapper, formState.errors[name] && scss.inputError)}>
                <label htmlFor={name} className={scss.label}>
                    {`${label}:`}
                </label>
                <input
                    {...register(name)}
                    type={showPassword ? 'text' : type}
                    id={name}
                    autoComplete="off"
                    {...rest}
                    className={scss.input}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className={scss.showPasswordButton}
                    >
                        <Icon variant={showPassword ? 'eye-off' : 'eye'} className={scss.icon} />
                    </button>
                )}
            </div>
            {formState.errors[name] && (
                <p className={scss.error}>{formState.errors[name].message as string}</p>
            )}
        </div>
    );
};

export default Input;
