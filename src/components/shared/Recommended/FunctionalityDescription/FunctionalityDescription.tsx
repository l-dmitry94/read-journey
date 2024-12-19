import { Link } from 'react-router-dom';

import Icon from 'components/ui/Icon';

import functionalityDescription from './functionality-description.json';

import scss from './FunctionalityDescription.module.scss';

const FunctionalityDescription = () => {
    return (
        <section className={scss.functionalityDescription}>
            <h2 className={scss.title}>Start your workout</h2>

            <ul className={scss.list}>
                {functionalityDescription.map(({ number, description }) => {
                    const [highlighted, ...rest] = description.split(': ');

                    return (
                        <li key={number} className={scss.item}>
                            <div className={scss.numberWrapper}>
                                <span className={scss.number}>{number}</span>
                            </div>
                            <p className={scss.description}>
                                <span className={scss.highlighted}>{`${highlighted}: `}</span>
                                <span>{rest}</span>
                            </p>
                        </li>
                    );
                })}
            </ul>

            <div className={scss.linkWrapper}>
                <Link to="/library" className={scss.link}>
                    My library
                </Link>
                <Link to="/library">
                    <Icon variant="log-in" className={scss.linkIcon} />
                </Link>
            </div>
        </section>
    );
};

export default FunctionalityDescription;
