import Container from 'components/ui/Container';

import Dashboard from './Dashboard';
import RecommendedBooks from './RecommendedBooks';

import scss from './Recommended.module.scss';

const Recommended = () => {
    return (
        <section className={scss.recommended}>
            <Container>
                <div className={scss.wrapper}>
                    <Dashboard />
                    <RecommendedBooks />
                </div>
            </Container>
        </section>
    );
};

export default Recommended;
