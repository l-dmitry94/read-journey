import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum Variant {
    Primary,
    Secondary,
}

export interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: Variant;
    type: 'reset' | 'submit' | 'button';
    children: ReactNode;
}
