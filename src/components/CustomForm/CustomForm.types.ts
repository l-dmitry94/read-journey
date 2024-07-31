import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ILogin } from 'components/Auth/Login';
import { IRegister } from 'components/Auth/Register';

export enum AuthType {
    Register,
    Login,
}

export interface ICustomForm {
    authType: AuthType;
    children: (
        register: UseFormRegister<ILogin | IRegister>,
        errors?: any
    ) => ReactNode;
}
