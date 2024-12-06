import Books from './Books';
import Pagination from './Pagination';

import scss from './RecommendedBooks.module.scss';

const RecommendedBooks = () => {
    return (
        <section className={scss.recommendedBooks}>
            <div className={scss.wrapper}>
                <h1 className={scss.title}>Recommended</h1>
                <Pagination />
            </div>

            <Books />
        </section>
    );
};

export default RecommendedBooks;
