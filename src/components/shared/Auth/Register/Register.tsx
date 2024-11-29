import { Path } from 'react-hook-form';

import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import Auth from '../Auth';

import registerFields from './register-fields.json';
import validationSchema from './validationSchema';

import scss from './Register.module.scss';

interface IRegisterData {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const handleSubmit = (data: IRegisterData) => {
        console.log(data);
    };

    return (
        <Auth>
            <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
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

                        <button type="submit">Register</button>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Register;
