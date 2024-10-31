'use client';
import { Path } from 'react-hook-form';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import { IRegisterData } from '@/types/auth.types';

import Auth from '../Auth';

import registerFields from './fields';
import registerValidationSchema from './validationSchema';

import scss from './Register.module.scss';

const Register = () => {
    const handleSubmit = (data: IRegisterData) => {
        console.log(data);
    };

    return (
        <Auth>
            <Form onSubmit={handleSubmit} validationSchema={registerValidationSchema}>
                {(register, errors) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {registerFields.map(({ type, name, label }) => (
                                <Input<IRegisterData>
                                    key={name}
                                    register={register}
                                    errors={errors}
                                    name={name as Path<IRegisterData>}
                                    type={type}
                                    label={label}
                                />
                            ))}
                        </div>

                        <div className={scss.controlWrapper}>
                            <Button type="submit" variant="contained" className={scss.button}>
                                Registration
                            </Button>
                            <Link href="/login" className={scss.link}>
                                Already have an account?
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Register;
