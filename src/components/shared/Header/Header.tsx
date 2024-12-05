import { useMedia } from 'hooks/useMedia';

import Container from 'components/ui/Container';

import Logo from '../Logo';

import BurgerMenu from './BurgerMenu';
import NavList from './NavList';
import UserMenu from './UserMenu';

import scss from './Header.module.scss';

const Header = () => {
    const { isMobile } = useMedia();

    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.leftPart}>
                        <Logo isMainPage />
                    </div>

                    {!isMobile && <NavList className={scss.navList} />}

                    <div className={scss.rightPart}>
                        <UserMenu />
                        <BurgerMenu />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
