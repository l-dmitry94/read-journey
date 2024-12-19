import Container from 'components/ui/Container';
import Dashboard from 'components/ui/Dashboard';

import Filters from './Filters';
import FunctionalityDescription from './FunctionalityDescription';
import Quote from './Quote';
import RecommendedBooks from './RecommendedBooks';

import scss from './Recommended.module.scss';

const Recommended = () => {
    return (
        <section className={scss.recommended}>
            <Container>
                <div className={scss.wrapper}>
                    <Dashboard>
                        <Filters />
                        <FunctionalityDescription />
                        <Quote />
                    </Dashboard>

                    <RecommendedBooks />
                </div>
            </Container>
        </section>
    );
};

export default Recommended;
