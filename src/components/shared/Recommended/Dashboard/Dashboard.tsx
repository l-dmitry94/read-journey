import Filters from './Filters';
import FunctionalityDescription from './FunctionalityDescription';
import Quote from './Quote';

import scss from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <section className={scss.dashboard}>
            <Filters />
            <FunctionalityDescription />
            <Quote />
        </section>
    );
};

export default Dashboard;
