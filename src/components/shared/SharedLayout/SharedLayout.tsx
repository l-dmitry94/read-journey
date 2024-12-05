import { Outlet } from 'react-router-dom';

import Header from '../Header';

import scss from './SharedLayout.module.scss';

const SharedLayout = () => {
    return (
        <div className={scss.sharedLayout}>
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default SharedLayout;
