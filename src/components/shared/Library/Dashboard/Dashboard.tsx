import AddBook from './AddBook';
import RecommendedBooks from './RecommendedBooks';

import scss from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <section className={scss.dashboard}>
            <AddBook />
            <RecommendedBooks />
        </section>
    );
};

export default Dashboard;
