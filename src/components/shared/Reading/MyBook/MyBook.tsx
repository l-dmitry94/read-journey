import { FC } from 'react';
import clsx from 'clsx';
import { IRecommendBooksResponse } from 'services/books/books.types';

import scss from './MyBook.module.scss';

const MyBook: FC<IRecommendBooksResponse> = ({ imageUrl, title, author }) => {
    return (
        <section className={scss.myBook}>
            <h1 className={scss.title}>My reading</h1>

            <div className={scss.book}>
                <img src={imageUrl} alt={title} className={scss.image} />

                <div className={scss.info}>
                    <h3 className={scss.bookTitle}>{title}</h3>
                    <p className={scss.bookAuthor}>{author}</p>
                </div>
            </div>

            <button type="button" className={scss.button}>
                <div className={clsx(scss.buttonOn, scss.buttonOff)}></div>
            </button>
        </section>
    );
};

export default MyBook;
