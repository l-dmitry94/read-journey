import * as yup from 'yup';

const validationSchema = yup.object({
    title: yup.string(),
    author: yup.string(),
});

export default validationSchema;
