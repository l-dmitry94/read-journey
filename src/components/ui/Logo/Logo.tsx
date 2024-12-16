import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Icon from 'components/ui/Icon';

import scss from './Logo.module.scss';

interface ILogo {
    isMainPage?: boolean;
}

const Logo: FC<ILogo> = ({ isMainPage }) => {
    return (
        <Link to="/" className={scss.logo}>
            <Icon variant="logo" className={scss.logoIcon} />
            <span className={clsx(scss.logoText, isMainPage && scss.logoTextMain)}>
                read journey
            </span>
        </Link>
    );
};

export default Logo;
