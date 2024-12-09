import useBooks from 'store/books/useBooks';

import Icon from 'components/ui/Icon';

import scss from './Pagination.module.scss';

const Pagination = () => {
    const { nextPage, prevPage, page, totalPages } = useBooks();

    return (
        <section className={scss.pagination}>
            <button onClick={prevPage} disabled={page === 1} className={scss.arrowButton}>
                <Icon variant="chevron-left" className={scss.arrowIcon} />
            </button>
            <button onClick={nextPage} disabled={page === totalPages} className={scss.arrowButton}>
                <Icon variant="chevron-right" className={scss.arrowIcon} />
            </button>
        </section>
    );
};

export default Pagination;
