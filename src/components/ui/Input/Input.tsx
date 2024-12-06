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
    noBorder?: boolean;
}
const Input = <T extends FieldValues>({
    register,
    name,
    label,
    type,
    formState,
    noBorder,
    ...rest
}: IInput<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword);

    const isTouched = formState.touchedFields[name as keyof typeof formState.touchedFields];
    const isError = formState.errors[name];

    return (
        <div className={scss.inputContainer}>
            <div
                className={clsx(
                    scss.inputWrapper,
                    isTouched && !noBorder ? (isError ? scss.inputError : scss.inputSuccess) : ''
                )}
            >
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
                {isTouched && !noBorder ? (
                    isError ? (
                        <Icon variant="error" className={clsx(scss.stateIcon, scss.errorIcon)} />
                    ) : (
                        <Icon
                            variant="success"
                            className={clsx(scss.stateIcon, scss.successIcon)}
                        />
                    )
                ) : (
                    ''
                )}
            </div>
            {isError && <p className={scss.error}>{isError.message as string}</p>}
        </div>
    );
};

export default Input;
