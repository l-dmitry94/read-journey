import { auth_desk_1x, auth_desk_2x, auth_mob_1x, auth_mob_2x } from '@/public/images/auth';

import scss from './AuthImage.module.scss';

const AuthImage = () => {
    return (
        <section className={scss.authImage}>
            <picture>
                <source
                    media="(min-width: 1440px)"
                    srcSet={`${auth_desk_1x.src} 1x, ${auth_desk_2x.src} 2x`}
                />
                <img
                    src={auth_mob_1x.src}
                    srcSet={`${auth_mob_1x.src} 1x, ${auth_mob_2x.src} 2x`}
                    alt="Auth image"
                    className={scss.image}
                />
            </picture>
        </section>
    );
};

export default AuthImage;
