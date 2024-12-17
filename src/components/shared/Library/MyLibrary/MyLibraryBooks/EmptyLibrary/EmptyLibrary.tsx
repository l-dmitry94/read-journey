import { books_1x, books_2x } from 'assets/img/books';

import scss from './EmptyLibrary.module.scss';

const EmptyLibrary = () => {
    return (
        <section className={scss.empty}>
            <div className={scss.imageWrapper}>
                <img
                    src={books_1x}
                    srcSet={`${books_1x} 1x, ${books_2x} 2x`}
                    alt="Books"
                    className={scss.image}
                />
            </div>
            <p className={scss.text}>
                {' '}
                <span className={scss.highlight}>To start training, add</span> some of your books{' '}
                <span className={scss.highlight}>or from the recommended ones</span>{' '}
            </p>
        </section>
    );
};

export default EmptyLibrary;
