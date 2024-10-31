import { FC } from 'react';

import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import { IChildren } from '@/types/children.types';

import AuthImage from './AuthImage';

import scss from './Auth.module.scss';

const Auth: FC<IChildren> = ({ children }) => {
    return (
        <section className={scss.auth}>
            <Container>
                <div className={scss.wrapper}>
                    <section className={scss.authData}>
                        <Logo />
                        <h1 className={scss.title}>
                            Expand your mind, reading{' '}
                            <span className={scss.titleColor}>a book</span>
                        </h1>
                        {children}
                    </section>

                    <AuthImage />
                </div>
            </Container>
        </section>
    );
};

export default Auth;
