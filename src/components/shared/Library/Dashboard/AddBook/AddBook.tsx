import { useState } from 'react';
import { Path } from 'react-hook-form';
import useBooks from 'store/books/useBooks';
import { IAddBookData } from 'types/books.types';

import Button from 'components/ui/Button';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import Modal from 'components/ui/Modal';

import addBookFields from './add-book-fields.json';
import SuccessModal from './SuccessModal';
import validationSchema from './validationSchema';

import scss from './AddBook.module.scss';

const AddBook = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { addBook, getLibraryBooks } = useBooks();

    const handleSubmit = async (data: IAddBookData) => {
        const normalizedData = { ...data, totalPages: Number(data.totalPages) };
        await addBook(normalizedData, () => setModalIsOpen(true));
        await getLibraryBooks();
    };

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

            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} isSuccess>
                <SuccessModal />
            </Modal>
        </section>
    );
};

export default AddBook;
