import { useEffect, useState } from 'react';
import { useMedia } from 'hooks/useMedia';
import useBooks from 'store/books/useBooks';
import { IBook } from 'types/books.types';

import Modal from 'components/ui/Modal';

import Book from './Book';

import scss from './Books.module.scss';

const Books = () => {
    const { getBooks, page, books } = useBooks();
    const { isMobile, isTablet } = useMedia();
    const [book, setBook] = useState({} as IBook);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const limit = isMobile ? 2 : isTablet ? 8 : 10;

    useEffect(() => {
        getBooks({ page, limit });
    }, [getBooks, page, limit]);

    const handleClick = (id: string) => {
        const book = books.find((item) => item._id === id);
        if (book) setBook(book);
        setModalIsOpen(true);
    };

    return (
        <section className={scss.books}>
            <ul className={scss.list}>
                {books.map(({ _id, imageUrl, title, author }) => (
                    <li key={_id} className={scss.item}>
                        <button onClick={() => handleClick(_id)} className={scss.imageButton}>
                            <img src={imageUrl} alt={title} className={scss.image} />
                        </button>

                        <div className={scss.info}>
                            <p title={title} className={scss.title}>
                                {title}
                            </p>
                            <p className={scss.author}>{author}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <Book {...book} />
            </Modal>
        </section>
    );
};

export default Books;
