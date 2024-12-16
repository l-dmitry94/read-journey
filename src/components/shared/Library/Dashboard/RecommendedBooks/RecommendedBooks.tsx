import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instance from 'services/axios.config';
import { IBooksResponse } from 'services/books/books.types';
import ENDPOINTS from 'services/endpoints';
import { IBook } from 'types/books.types';

import Book from 'components/shared/Recommended/RecommendedBooks/Books/Book';
import Icon from 'components/ui/Icon';
import Modal from 'components/ui/Modal';

import scss from './RecommendedBooks.module.scss';

const RecommendedBooks = () => {
    const [book, setBook] = useState({} as IBook);
    const [books, setBooks] = useState([] as IBook[]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await instance.get<IBooksResponse>(ENDPOINTS.books.recommend, {
                    params: { page: 1, limit: 3 },
                });
                setBooks(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBooks();
    }, []);

    const handleClick = (id: string) => {
        const book = books.find((item) => item._id === id);
        if (book) setBook(book);
        setModalIsOpen(true);
    };

    return (
        <section className={scss.recommendedBooks}>
            <h2 className={scss.title}>Recommended books</h2>

            <ul className={scss.list}>
                {books?.map(({ _id, imageUrl, title, author }) => (
                    <li key={_id} className={scss.item}>
                        <button onClick={() => handleClick(_id)} className={scss.imageButton}>
                            <img src={imageUrl} alt={title} className={scss.image} />
                        </button>

                        <div className={scss.info}>
                            <p title={title} className={scss.itemTitle}>
                                {title}
                            </p>
                            <p title={author} className={scss.author}>
                                {author}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className={scss.linkWrapper}>
                <Link to="/recommended" className={scss.link}>
                    Home
                </Link>
                <Link to="/recommended">
                    <Icon variant="log-in" className={scss.linkIcon} />
                </Link>
            </div>

            <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
                <Book {...book} />
            </Modal>
        </section>
    );
};

export default RecommendedBooks;
