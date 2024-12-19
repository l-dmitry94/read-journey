import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useBooks from 'store/books/useBooks';

import Container from 'components/ui/Container';
import Dashboard from 'components/ui/Dashboard';

import AddReading from './AddReading';
import Details from './Details';
import MyBook from './MyBook';

import scss from './Reading.module.scss';

const Reading = () => {
    const { readingBook, getOneBook } = useBooks();
    const { bookId } = useParams();

    useEffect(() => {
        if (bookId) {
            getOneBook(bookId);
        }
    }, [bookId, getOneBook]);

    console.log(readingBook);

    return (
        <section className={scss.reading}>
            <Container>
                <div className={scss.wrapper}>
                    <Dashboard className={scss.dashboard}>
                        <AddReading />
                        <Details />
                    </Dashboard>

                    {readingBook && <MyBook {...readingBook} />}
                </div>
            </Container>
        </section>
    );
};

export default Reading;
