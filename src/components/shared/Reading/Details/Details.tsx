import NoProgress from './NoProgress';

import scss from './Details.module.scss';

const Details = () => {
    return (
        <section className={scss.details}>
            <NoProgress />
        </section>
    );
};

export default Details;
