import { FC, SVGProps } from 'react';
import { sprite } from 'assets/icons';
import clsx from 'clsx';

import scss from './Icon.module.scss';

type IconVariant =
    | 'logo'
    | 'attachment'
    | 'chevron-up'
    | 'chevron-left'
    | 'chevron-right'
    | 'close'
    | 'error'
    | 'eye'
    | 'eye-off'
    | 'hourglass'
    | 'log-in'
    | 'menu'
    | 'pie-chart'
    | 'success';

interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariant;
}

const Icon: FC<IIcon> = ({ variant, className }) => {
    return (
        <svg className={clsx(scss.icon, className)}>
            <use href={`${sprite}#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
