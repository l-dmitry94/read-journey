import Link from 'next/link';

import Icon from '../Icon';

import scss from './Logo.module.scss';

const Logo = () => {
    return (
        <Link href="/" className={scss.logo}>
            <Icon variant="logo" className={scss.logoIcon} />
            <span className={scss.logoText}>read journey</span>
        </Link>
    );
};

export default Logo;
