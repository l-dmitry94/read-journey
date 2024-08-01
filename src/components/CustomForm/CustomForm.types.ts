import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';
import { ILogin } from 'components/Auth/Login';
import { IRegister } from 'components/Auth/Register';

export enum AuthType {
    Register,
    Login,
}

export interface ICustomForm {
    authType: AuthType;
    validationSchema: yup.ObjectSchema<ILogin | IRegister>;
    children: (
        register: UseFormRegister<ILogin | IRegister>,
        errors?: any,
        touchedFields?: any
    ) => ReactNode;
}
