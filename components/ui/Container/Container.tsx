import { FC } from 'react';
import clsx from 'clsx';

import { IChildren } from '@/types/children.types';

import scss from './Container.module.scss';

const Container: FC<IChildren> = ({ children, className }) => {
    return <div className={clsx(scss.container, className)}>{children}</div>;
};

export default Container;
