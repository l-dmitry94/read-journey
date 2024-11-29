import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export interface IFormChildren<T extends FieldValues> {
    register: UseFormRegister<T>;
    formState: FormState<T>;
}
