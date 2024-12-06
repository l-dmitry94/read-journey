import { Path } from 'react-hook-form';
import useAuth from 'store/auth/useAuth';
import { IRegisterData } from 'types/auth.types';

import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import Auth from '../Auth';
import AuthControl from '../AuthControl';

import registerFields from './register-fields.json';
import validationSchema from './validationSchema';

import scss from './Register.module.scss';

const Register = () => {
    const { signup } = useAuth();

    const handleSubmit = (data: IRegisterData) => {
        signup(data);
    };

    return (
        <Auth>
            <Form<IRegisterData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ register, formState }) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {registerFields.map((field) => (
                                <Input<IRegisterData>
                                    key={field.name}
                                    register={register}
                                    name={field.name as Path<IRegisterData>}
                                    label={field.label}
                                    formState={formState}
                                    type={field.type}
                                />
                            ))}
                        </div>

                        <AuthControl
                            buttonText="Registration"
                            link="/login"
                            linkText="Already have an account?"
                        />
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Register;
