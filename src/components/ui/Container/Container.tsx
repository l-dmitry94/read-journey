import { FC } from 'react';
import { IChildren } from 'types/children.types';

import scss from './Container.module.scss';

const Container: FC<IChildren> = ({ children }) => {
    return <div className={scss.container}>{children}</div>;
};

export default Container;
