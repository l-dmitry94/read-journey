import { FC, SVGProps } from 'react';
import clsx from 'clsx';

import scss from './Icon.module.scss';

type IconVariant =
    | 'attachment'
    | 'chevron-up'
    | 'close'
    | 'error'
    | 'eye'
    | 'eye-off'
    | 'hourglass'
    | 'log-in'
    | 'logo'
    | 'pie-chart'
    | 'success'
    | 'chevron-right';

interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariant;
}

const Icon: FC<IIcon> = ({ variant, className, ...props }) => {
    return (
        <svg className={clsx(scss.icon, className)} {...props}>
            <use href={`/icons/icons.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
