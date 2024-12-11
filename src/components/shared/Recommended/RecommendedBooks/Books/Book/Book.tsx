import { FC } from 'react';
import { toast } from 'react-toastify';
import { addRecommendBook } from 'services/books/books.api';
import { IBook } from 'types/books.types';

import Button from 'components/ui/Button';

import scss from './Book.module.scss';

const Book: FC<IBook> = ({ _id, title, author, imageUrl, totalPages }) => {
    const handleClick = async () => {
        try {
            await addRecommendBook(_id);
            toast.success('Book added to library');
        } catch (error) {
            toast.error('Something went wrong');
        }
    };

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

            <div className={scss.buttonWrapper}>
                <Button variant="outlined" onClick={handleClick}>
                    Add to library
                </Button>
            </div>
        </div>
    );
};

export default Book;
