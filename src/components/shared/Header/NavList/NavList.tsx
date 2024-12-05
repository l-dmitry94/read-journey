import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import navList from './nav-list.json';

import scss from './NavList.module.scss';

interface INavList {
    className?: string;
}

const NavList: FC<INavList> = ({ className }) => {
    return (
        <nav className={className}>
            <ul className={scss.list}>
                {navList.map(({ label, href }) => (
                    <li key={label} className={scss.item}>
                        <NavLink to={href} className={scss.link}>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavList;
