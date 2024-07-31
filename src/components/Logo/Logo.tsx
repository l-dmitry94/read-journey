import { Link } from 'react-router-dom';
import { useMedia } from 'hooks/useMedia';
import { icons } from 'assets/icons';
import scss from './Logo.module.scss';

const Logo = () => {
    const { isMobile } = useMedia();

    return (
        <Link to="/" className={scss.logo}>
            <svg className={scss.logoIcon}>
                <use href={`${icons}#icon-logo`}></use>
            </svg>
            {!isMobile && <span className={scss.logoText}>read journey</span>}
        </Link>
    );
};

export default Logo;
