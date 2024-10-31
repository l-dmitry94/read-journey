import React, { InputHTMLAttributes, useState } from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

import Icon from '../Icon';

import scss from './Input.module.scss';

interface IInput<T extends FieldValues>
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    name: Path<T>;
    label: string;
}

const Input = <T extends FieldValues>({
    register,
    errors,
    name,
    label,
    type,
    ...props
}: IInput<T>) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className={scss.wrapper}>
            <div className={clsx(scss.inputWrapper, errors[name] && scss.inputError)}>
                <label htmlFor={name} className={scss.label}>{`${label}:`}</label>
                <input
                    {...register(name)}
                    type={isShowPassword ? 'text' : type}
                    id={name}
                    autoComplete="off"
                    className={scss.input}
                    {...props}
                />
                {type === 'password' && (
                    <button type="button" onClick={() => setIsShowPassword(!isShowPassword)}>
                        <Icon variant={isShowPassword ? 'eye-off' : 'eye'} className={scss.icon} />
                    </button>
                )}
                {errors[name] && <Icon variant="error" className={scss.errorIcon} />}
            </div>

            {errors[name] && <p className={scss.error}>{errors[name].message as string}</p>}
        </div>
    );
};

export default Input;
