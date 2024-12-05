import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { useMedia } from 'hooks/useMedia';

import Icon from 'components/ui/Icon';

import LogoutButton from '../LogoutButton';
import NavList from '../NavList';

import 'react-modern-drawer/dist/index.css';
import scss from './BurgerMenu.module.scss';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useMedia();

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);

    const toggleDrawer = () => setIsOpen((prevState) => !prevState);

    if (!isMobile) return null;

    return (
        <div className={scss.burgerMenu}>
            <button className={scss.menuButton} onClick={toggleDrawer}>
                <Icon variant="menu" className={scss.menuIcon} />
            </button>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                size={200}
                direction="right"
                lockBackgroundScroll
                className={scss.drawer}
            >
                <button onClick={toggleDrawer} className={scss.closeButton}>
                    <Icon variant="close" className={scss.closeIcon} />
                </button>
                <div className={scss.navList}>
                    <NavList />
                </div>
                <LogoutButton className={scss.logoutButton} />
            </Drawer>
        </div>
    );
};

export default BurgerMenu;
