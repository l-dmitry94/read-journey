import { FC } from 'react';
import useAuth from 'store/auth/useAuth';

import Button from 'components/ui/Button';

interface ILogoutButton {
    className?: string;
}

const LogoutButton: FC<ILogoutButton> = ({ className }) => {
    const { signout } = useAuth();

    return (
        <Button variant="outlined" onClick={signout} className={className}>
            Log out
        </Button>
    );
};

export default LogoutButton;
