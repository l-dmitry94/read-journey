import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup
        .string()
        .required('Email is required')
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email'),
    password: yup
        .string()
        .required('Password is required')
        .min(7, 'Password must be at least 7 characters'),
});

export default validationSchema;
