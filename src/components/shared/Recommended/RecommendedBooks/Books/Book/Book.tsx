import { FC } from 'react';
import { IBook } from 'types/books.types';
import { IChildren } from 'types/children.types';

import scss from './Book.module.scss';

interface IBookProps extends IBook, IChildren {}

const Book: FC<IBookProps> = ({ title, author, imageUrl, totalPages, children }) => {
    return (
        <div className={scss.book}>
            <div className={scss.imageWrapper}>
                <img src={imageUrl} alt={title} className={scss.image} />
            </div>

            <div className={scss.info}>
                <h4 className={scss.title}>{title}</h4>
                <p className={scss.author}>{author}</p>
                <p className={scss.pages}>{`${totalPages} pages`}</p>
            </div>

            <div className={scss.buttonWrapper}>{children}</div>
        </div>
    );
};

export default Book;
