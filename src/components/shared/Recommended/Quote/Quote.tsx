import { books_1x, books_2x } from 'assets/img/books';

import scss from './Quote.module.scss';

const Quote = () => {
    return (
        <section className={scss.quote}>
            <img
                src={books_1x}
                srcSet={`${books_1x} 1x, ${books_2x} 2x`}
                alt="Books"
                className={scss.image}
            />
            <q className={scss.text}>
                Books are <span className={scss.highlight}>windows</span> to the world, and reading
                is a journey into the unknown.
            </q>
        </section>
    );
};

export default Quote;
