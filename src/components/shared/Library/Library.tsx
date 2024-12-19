import Container from 'components/ui/Container';
import Dashboard from 'components/ui/Dashboard';

import AddBook from './AddBook';
import MyLibrary from './MyLibrary';
import RecommendedBooks from './RecommendedBooks';

import scss from './Library.module.scss';

const Library = () => {
    return (
        <section className={scss.library}>
            <Container>
                <div className={scss.wrapper}>
                    <Dashboard>
                        <AddBook />
                        <RecommendedBooks />
                    </Dashboard>

                    <MyLibrary />
                </div>
            </Container>
        </section>
    );
};

export default Library;
