import { FC, useState } from 'react';
import { ICustomInput } from './CustomInput.types';
import { icons } from 'assets/icons';
import scss from './CustomInput.module.scss';

const CustomInput: FC<ICustomInput> = ({
    name,
    type,
    register,
    label,
    error,
    touched,
    ...rest
}) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const handleClick = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div>
            <div
                className={`${scss.inputWrapper} ${touched && (error ? scss.errorBorder : scss.successBorder)}`}
            >
                <label htmlFor={name} className={scss.label}>
                    {`${label}:`}
                </label>
                <input
                    {...rest}
                    id={name}
                    autoComplete="off"
                    type={
                        isShowPassword || type === 'text' ? 'text' : 'password'
                    }
                    {...register(name)}
                    className={scss.input}
                />

                {touched && error && (
                    <svg className={scss.errorIcon}>
                        <use href={`${icons}#icon-error`}></use>
                    </svg>
                )}

                {touched && !error && (
                    <svg className={scss.successIcon}>
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                )}

                {type === 'password' && !touched && (
                    <button
                        type="button"
                        onClick={handleClick}
                        className={scss.passwordButton}
                    >
                        <svg className={scss.eyeIcon}>
                            <use
                                href={`${icons}#icon-${isShowPassword ? 'eye-off' : 'eye'}`}
                            ></use>
                        </svg>
                    </button>
                )}
            </div>
            {error && <p className={scss.error}>{error}</p>}
        </div>
    );
};

export default CustomInput;
