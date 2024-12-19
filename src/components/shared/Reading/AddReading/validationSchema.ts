import * as yup from 'yup';

const validationSchema = yup.object({
    page: yup
        .number()
        .typeError('Page number must be a number')
        .required('Page number is required'),
});

export default validationSchema;
