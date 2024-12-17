import Container from 'components/ui/Container';

import Dashboard from './Dashboard';
import MyLibrary from './MyLibrary';

import scss from './Library.module.scss';

const Library = () => {
    return (
        <section className={scss.library}>
            <Container>
                <div className={scss.wrapper}>
                    <Dashboard />
                    <MyLibrary />
                </div>
            </Container>
        </section>
    );
};

export default Library;
