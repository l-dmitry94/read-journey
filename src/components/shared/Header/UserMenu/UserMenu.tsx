import { useMedia } from 'hooks/useMedia';
import useAuth from 'store/auth/useAuth';

import LogoutButton from '../LogoutButton';

import scss from './UserMenu.module.scss';

const UserMenu = () => {
    const { user } = useAuth();
    const { isMobile } = useMedia();

    return (
        <div className={scss.userMenu}>
            <div className={scss.userInfo}>
                <div className={scss.firstLetterNameWrapper}>
                    <span className={scss.firstLetterName}>
                        {user?.name.slice(0, 1).toUpperCase()}
                    </span>
                </div>
                <span className={scss.name}>{user?.name}</span>
            </div>

            {!isMobile && <LogoutButton />}
        </div>
    );
};

export default UserMenu;
