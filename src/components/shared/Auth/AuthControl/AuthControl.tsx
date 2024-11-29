import { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/ui/Button';

import scss from './AuthControl.module.scss';

interface IAuthControl {
    buttonText: string;
    linkText: string;
    link: string;
}

const AuthControl: FC<IAuthControl> = ({ buttonText, link, linkText }) => {
    return (
        <div className={scss.authControl}>
            <Button>{buttonText}</Button>
            <Link to={link} className={scss.link}>
                {linkText}
            </Link>
        </div>
    );
};

export default AuthControl;
