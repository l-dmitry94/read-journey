import { redirect } from 'next/navigation';

const HomePage = () => {
    redirect('/register');

    return <div>HomePage</div>;
};

export default HomePage;
