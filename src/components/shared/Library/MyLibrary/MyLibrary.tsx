import MyLibraryBooks from './MyLibraryBooks';
import MyLibraryHead from './MyLibraryHead';

import scss from './MyLibrary.module.scss';

const MyLibrary = () => {
    return (
        <section className={scss.myLibrary}>
            <MyLibraryHead />
            <MyLibraryBooks />
        </section>
    );
};

export default MyLibrary;
