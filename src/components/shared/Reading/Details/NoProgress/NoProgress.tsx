import { star_1x, star_2x } from 'assets/img/star';

import scss from './NoProgress.module.scss';

const NoProgress = () => {
    return (
        <section className={scss.noProgress}>
            <h2 className={scss.title}>Progress</h2>
            <p className={scss.text}>
                Here you will see when and how much you read. To record, click on the red button
                above.
            </p>
            <div className={scss.imageWrapper}>
                <img
                    src={star_1x}
                    srcSet={`${star_1x} 1x, ${star_2x} 2x`}
                    alt="Star"
                    className={scss.image}
                />
            </div>
        </section>
    );
};

export default NoProgress;
