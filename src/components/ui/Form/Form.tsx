import { ReactNode } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormChildren } from 'types/form.types';
import { AnyObjectSchema } from 'yup';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    validationSchema: AnyObjectSchema;
    children: (props: IFormChildren<T>) => ReactNode;
}
const Form = <T extends FieldValues>({ onSubmit, validationSchema, children }: IForm<T>) => {
    const { register, handleSubmit, formState } = useForm<T>({
        resolver: yupResolver(validationSchema),
    });

    return <form onSubmit={handleSubmit(onSubmit)}>{children({ register, formState })}</form>;
};

export default Form;
