import { ReactNode } from 'react';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormChildren } from 'types/form.types';
import { AnyObjectSchema } from 'yup';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    validationSchema: AnyObjectSchema;
    children: (props: IFormChildren<T>) => ReactNode;
    defaultValues?: DefaultValues<T>;
}
const Form = <T extends FieldValues>({
    onSubmit,
    validationSchema,
    children,
    defaultValues,
}: IForm<T>) => {
    const { register, handleSubmit, formState } = useForm<T>({
        resolver: yupResolver(validationSchema),
        mode: 'onTouched',
        defaultValues,
    });

    return <form onSubmit={handleSubmit(onSubmit)}>{children({ register, formState })}</form>;
};

export default Form;
