import { Path } from 'react-hook-form';
import { IAddBookData } from 'types/books.types';

import Button from 'components/ui/Button';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import addBookFields from './add-book-fields.json';
import validationSchema from './validationSchema';

import scss from './AddBook.module.scss';

const AddBook = () => {
    const handleSubmit = (data: IAddBookData) => console.log(data);
    return (
        <section className={scss.addBook}>
            <p className={scss.title}>Create your library:</p>

            <Form<IAddBookData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ register, formState }) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {addBookFields.map((field) => (
                                <Input<IAddBookData>
                                    key={field.name}
                                    register={register}
                                    name={field.name as Path<IAddBookData>}
                                    label={field.label}
                                    formState={formState}
                                    noBorder
                                />
                            ))}
                        </div>

                        <Button type="submit" variant="outlined">
                            Add book
                        </Button>
                    </>
                )}
            </Form>
        </section>
    );
};

export default AddBook;
