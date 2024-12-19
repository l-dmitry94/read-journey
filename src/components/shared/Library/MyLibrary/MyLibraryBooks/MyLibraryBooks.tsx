import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRecommendBooksResponse } from 'services/books/books.types';
import useBooks from 'store/books/useBooks';

import Book from 'components/shared/Recommended/RecommendedBooks/Books/Book';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';
import Modal from 'components/ui/Modal';

import EmptyLibrary from './EmptyLibrary';

import scss from './MyLibraryBooks.module.scss';

const MyLibraryBooks = () => {
    const { libraryBooks, getLibraryBooks, removeBook } = useBooks();
    const [book, setBook] = useState({} as IRecommendBooksResponse);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getLibraryBooks();
    }, [getLibraryBooks]);

    const handleClick = (id: string) => {
        const book = libraryBooks.find((item) => item._id === id);
        if (book) setBook(book);
        setModalIsOpen(true);
    };

    const handleClickModal = async (id: string) => {
        navigate(`/reading/${id}`);
    };

    const deleteBook = async (id: string) => {
        await removeBook(id);
    };

    if (!libraryBooks.length) return <EmptyLibrary />;

    return (
        <section className={scss.myLibraryBooks}>
            <ul className={scss.list}>
                {libraryBooks.map(({ _id, imageUrl, title, author }) => (
                    <li key={_id} className={scss.item}>
                        <button onClick={() => handleClick(_id)} className={scss.imageButton}>
                            {imageUrl ? (
                                <img src={imageUrl} alt={title} className={scss.image} />
                            ) : (
                                <div className={scss.imageEmpty}>
                                    <Icon
                                        variant="questionmark"
                                        className={scss.questionmarkIcon}
                                    />
                                </div>
                            )}
                        </button>

                        <div className={scss.infoWrapper}>
                            <div className={scss.info}>
                                <p title={title} className={scss.title}>
                                    {title}
                                </p>
                                <p className={scss.author}>{author}</p>
                            </div>

                            <button onClick={() => deleteBook(_id)} className={scss.button}>
                                <Icon variant="trash" className={scss.icon} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <Book {...book}>
                    <Button variant="outlined" onClick={() => handleClickModal(book._id)}>
                        Start reading
                    </Button>
                </Book>
            </Modal>
        </section>
    );
};

export default MyLibraryBooks;
