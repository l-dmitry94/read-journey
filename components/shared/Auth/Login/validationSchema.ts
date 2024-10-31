import * as yup from 'yup';

const loginValidationSchema = yup.object({
    email: yup
        .string()
        .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid email')
        .required('Email is required'),
    password: yup.string().min(7, 'Enter a valid password').required('Password is required'),
});

export default loginValidationSchema;
