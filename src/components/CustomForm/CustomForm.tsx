import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomButton, { Variant } from 'components/CustomButton';
import { AuthType, ICustomForm } from './CustomForm.types';
import { ILogin } from 'components/Auth/Login';
import { IRegister } from 'components/Auth/Register';
import scss from './CustomForm.module.scss';

const CustomForm: FC<ICustomForm> = ({ authType, children }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ILogin | IRegister>();

    const onSubmit: SubmitHandler<ILogin | IRegister> = (data) => {
        console.log(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {children(register, errors)}

            <div className={scss.controls}>
                <CustomButton
                    variant={Variant.Primary}
                    type="submit"
                    style={{
                        padding:
                            authType === AuthType.Register
                                ? '12px 29px'
                                : '12px 45px',
                    }}
                >
                    {authType === AuthType.Register ? 'Registration' : 'Log in'}
                </CustomButton>
                <Link
                    to={authType === AuthType.Register ? '/login' : '/register'}
                    className={scss.linkText}
                >
                    {authType === AuthType.Register
                        ? 'Already have an account?'
                        : "Don't have an account?"}
                </Link>
            </div>
        </form>
    );
};

export default CustomForm;
