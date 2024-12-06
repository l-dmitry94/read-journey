import { Path } from 'react-hook-form';
import useAuth from 'store/auth/useAuth';
import { ILoginData } from 'types/auth.types';

import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import Auth from '../Auth';
import AuthControl from '../AuthControl';

import loginFields from './login-fields.json';
import validationSchema from './validationSchema';

import scss from './Login.module.scss';

const Login = () => {
    const { signin } = useAuth();

    const handleSubmit = (data: ILoginData) => {
        signin(data);
    };

    return (
        <Auth>
            <Form<ILoginData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ register, formState }) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {loginFields.map((field) => (
                                <Input<ILoginData>
                                    key={field.name}
                                    register={register}
                                    name={field.name as Path<ILoginData>}
                                    label={field.label}
                                    formState={formState}
                                    type={field.type}
                                />
                            ))}
                        </div>

                        <AuthControl
                            buttonText="Log In"
                            link="/register"
                            linkText="Don't have an account?"
                        />
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Login;
