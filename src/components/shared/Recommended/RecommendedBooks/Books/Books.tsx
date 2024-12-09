import { useEffect } from 'react';
import { useMedia } from 'hooks/useMedia';
import useBooks from 'store/books/useBooks';

import scss from './Books.module.scss';

const Books = () => {
    const { getBooks, page, books, author, title, resetFilter } = useBooks();
    const { isMobile, isTablet } = useMedia();

    const limit = isMobile ? 2 : isTablet ? 8 : 10;

    useEffect(() => {
        if (author || title) {
            resetFilter(limit);
        }
    }, [author, limit, resetFilter, title]);

    useEffect(() => {
        getBooks({ title, author, page, limit });
    }, [getBooks, page, limit, author, title]);

    return (
        <section className={scss.books}>
            <ul className={scss.list}>
                {books.map(({ _id, imageUrl, title, author }) => (
                    <li key={_id} className={scss.item}>
                        <button className={scss.imageButton}>
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
        </section>
    );
};

export default Books;
