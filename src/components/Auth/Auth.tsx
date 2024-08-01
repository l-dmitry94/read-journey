import { FC } from 'react';
import clsx from 'clsx';
import Logo from 'components/Logo';
import { useMedia } from 'hooks/useMedia';
import {
    phone_desk,
    phone_desk_2x,
    phone_mob,
    phone_mob_2x,
} from 'assets/auth';
import { IAuth } from './Auth.types';
import scss from './Auth.module.scss';

const Auth: FC<IAuth> = ({ children }) => {
    const { isTablet } = useMedia();

    return (
        <div className={scss.wrapper}>
            <div className={scss.innerWrapper}>
                <Logo />
                <h1 className={scss.title}>
                    Expand your mind, reading{' '}
                    <span className={scss.titleColor}>a book</span>
                </h1>
                {children}
            </div>

            {!isTablet && (
                <div
                    className={clsx(scss.innerWrapper, scss.innerWrapperImage)}
                >
                    <picture>
                        <source
                            media="(min-width: 1440px)"
                            srcSet={`${phone_desk} 1x, ${phone_desk_2x} 2x`}
                        />
                        <img
                            src={phone_mob}
                            srcSet={`${phone_mob} 1x, ${phone_mob_2x} 2x`}
                            alt="IPhone"
                            className={scss.image}
                        />
                    </picture>
                </div>
            )}
        </div>
    );
};

export default Auth;
