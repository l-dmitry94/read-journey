import { FC } from 'react';
import { phone_desk_1x, phone_desk_2x, phone_mob_1x, phone_mob_2x } from 'assets/img/phone';
import clsx from 'clsx';
import { IChildren } from 'types/children.types';

import Container from 'components/ui/Container';

import Logo from '../Logo';

import scss from './Auth.module.scss';

interface IAuth extends IChildren {}

const Auth: FC<IAuth> = ({ children }) => {
    return (
        <section className={scss.auth}>
            <Container>
                <section className={scss.wrapper}>
                    <section className={clsx(scss.bg, scss.content)}>
                        <header className={scss.header}>
                            <Logo />
                        </header>

                        <main>
                            <h1 className={scss.title}>
                                Expand your mind, reading{' '}
                                <span className={scss.titleColor}>a book</span>
                            </h1>
                            {children}
                        </main>
                    </section>

                    <section className={clsx(scss.bg, scss.image)}>
                        <main>
                            <picture>
                                <source
                                    media="(min-width: 1280px)"
                                    srcSet={`${phone_desk_1x} 1x, ${phone_desk_2x} 2x`}
                                />
                                <img
                                    src={phone_mob_1x}
                                    srcSet={`${phone_mob_1x} 1x, ${phone_mob_2x} 2x`}
                                    alt="Phone image"
                                    className={scss.imagePhone}
                                />
                            </picture>
                        </main>
                    </section>
                </section>
            </Container>
        </section>
    );
};

export default Auth;
