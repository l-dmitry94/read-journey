'use client';
import { Path } from 'react-hook-form';
import Link from 'next/link';

import Button from '@/components/ui/Button';
import Form from '@/components/ui/Form';
import Input from '@/components/ui/Input';
import { ILoginData } from '@/types/auth.types';

import Auth from '../Auth';

import loginFields from './fields';
import loginValidationSchema from './validationSchema';

import scss from './Login.module.scss';

const Login = () => {
    const handleSubmit = (data: ILoginData) => {
        console.log(data);
    };

    return (
        <Auth>
            <Form onSubmit={handleSubmit} validationSchema={loginValidationSchema}>
                {(register, errors) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {loginFields.map(({ type, name, label }) => (
                                <Input<ILoginData>
                                    key={name}
                                    register={register}
                                    errors={errors}
                                    name={name as Path<ILoginData>}
                                    type={type}
                                    label={label}
                                />
                            ))}
                        </div>

                        <div className={scss.controlWrapper}>
                            <Button type="submit" variant="contained" className={scss.button}>
                                Log in
                            </Button>
                            <Link href="/register" className={scss.link}>
                                Don&apos;t have an account?
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </Auth>
    );
};

export default Login;
