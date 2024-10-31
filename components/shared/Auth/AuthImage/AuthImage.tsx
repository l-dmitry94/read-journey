import Image from 'next/image';

import { auth_desk_2x, auth_mob_2x } from '@/public/images/auth';

import scss from './AuthImage.module.scss';

const AuthImage = () => {
    return (
        <section className={scss.authImage}>
            <Image src={auth_mob_2x} alt="Auth image" priority className={scss.imageMobile} />
            <Image src={auth_desk_2x} alt="Auth image" priority className={scss.imageDesktop} />
        </section>
    );
};

export default AuthImage;
