import * as yup from 'yup';

const validationSchema = yup.object({
    title: yup.string(),
    author: yup.string(),
    totalPages: yup.number(),
});

export default validationSchema;
