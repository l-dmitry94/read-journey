import { book_1, book_2 } from 'assets/img/temp';

import scss from './Books.module.scss';

const Books = () => {
    return (
        <section className={scss.books}>
            <ul className={scss.list}>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_1} alt="Lovers of Justice" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>Lovers of Justice</p>
                        <p className={scss.author}>Yuri Andrukhovych</p>
                    </div>
                </li>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_2} alt="It doesn't hurt" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>It doesn't hurt</p>
                        <p className={scss.author}>Kateryna Babkina</p>
                    </div>
                </li>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_1} alt="Lovers of Justice" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>Lovers of Justice</p>
                        <p className={scss.author}>Yuri Andrukhovych</p>
                    </div>
                </li>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_2} alt="It doesn't hurt" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>It doesn't hurt</p>
                        <p className={scss.author}>Kateryna Babkina</p>
                    </div>
                </li>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_1} alt="Lovers of Justice" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>Lovers of Justice</p>
                        <p className={scss.author}>Yuri Andrukhovych</p>
                    </div>
                </li>
                <li className={scss.item}>
                    <button className={scss.imageButton}>
                        <img src={book_2} alt="It doesn't hurt" className={scss.image} />
                    </button>

                    <div className={scss.info}>
                        <p className={scss.title}>It doesn't hurt</p>
                        <p className={scss.author}>Kateryna Babkina</p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Books;
