import { FC } from 'react';
import clsx from 'clsx';
import { IChildren } from 'types/children.types';

import scss from './Dashboard.module.scss';

const Dashboard: FC<IChildren> = ({ className, children }) => {
    return <section className={clsx(scss.dashboard, className)}>{children}</section>;
};

export default Dashboard;
