import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Email is not valid'),
    password: yup
        .string()
        .required('Password is required')
        .min(7, 'Password must be at least 7 characters long'),
});

export default validationSchema;
