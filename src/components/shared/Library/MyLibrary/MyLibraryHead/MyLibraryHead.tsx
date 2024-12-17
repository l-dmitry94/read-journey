import { useState } from 'react';
import Select from 'react-select';
import { BookStatus } from 'services/books/books.types';

import scss from './MyLibraryHead.module.scss';

interface IOption {
    value: string;
    label: string;
}

const options: IOption[] = [
    { value: BookStatus.unread, label: 'Unread' },
    { value: BookStatus['in-progress'], label: 'In progress' },
    { value: BookStatus.done, label: 'Done' },
    { value: '', label: 'All books' },
];

const MyLibraryHead = () => {
    const [selectedOption, setSelectedOption] = useState<IOption | null>(
        options[options.length - 1]
    );

    return (
        <section className={scss.myLibraryHead}>
            <h1 className={scss.title}>My library</h1>

            <Select
                options={options}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                isSearchable={false}
                unstyled
                className={scss.selectContainer}
                classNamePrefix={scss.select}
            />
        </section>
    );
};

export default MyLibraryHead;
