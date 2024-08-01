import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IRegister } from 'components/Auth/Register';
import { ILogin } from 'components/Auth/Login';

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    name: keyof ILogin | keyof IRegister;
    register: UseFormRegister<ILogin | IRegister>;
    error?: string;
    type: HTMLInputTypeAttribute;
    label: string;
    touched: any;
}
