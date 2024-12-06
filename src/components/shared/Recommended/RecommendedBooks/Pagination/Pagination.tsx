import Icon from 'components/ui/Icon';

import scss from './Pagination.module.scss';

const Pagination = () => {
    return (
        <section className={scss.pagination}>
            <button className={scss.arrowButton}>
                <Icon variant="chevron-left" className={scss.arrowIcon} />
            </button>
            <button className={scss.arrowButton}>
                <Icon variant="chevron-right" className={scss.arrowIcon} />
            </button>
        </section>
    );
};

export default Pagination;
