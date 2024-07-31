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
    ...rest
}) => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const handleClick = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div>
            <div className={scss.inputWrapper}>
                <label htmlFor={name} className={scss.label}>
                    {`${label}:`}
                </label>
                <input
                    {...rest}
                    id={name}
                    type={
                        isShowPassword || type === 'text' ? 'text' : 'password'
                    }
                    {...register(name)}
                    className={scss.input}
                />

                {type === 'password' && (
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
