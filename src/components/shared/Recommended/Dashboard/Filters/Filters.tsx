import { Path } from 'react-hook-form';
import useBooks from 'store/books/useBooks';
import { IFilterData } from 'types/filters.types';

import Button from 'components/ui/Button';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import filtersFields from './filters-fields.json';
import validationSchema from './validationSchema';

import scss from './Filters.module.scss';

const Filters = () => {
    const { setFilter } = useBooks();

    const handleSubmit = (data: IFilterData) => {
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== '')
        );

        const { title, author } = filteredData;

        if (title || author) {
            setFilter(title, author);
        }
    };

    return (
        <section className={scss.filters}>
            <p className={scss.title}>Filters</p>

            <Form<IFilterData> onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ register, formState }) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            {filtersFields.map((field) => (
                                <Input<IFilterData>
                                    key={field.name}
                                    register={register}
                                    name={field.name as Path<IFilterData>}
                                    label={field.label}
                                    formState={formState}
                                    noBorder
                                />
                            ))}
                        </div>

                        <Button type="submit" variant="outlined">
                            To apply
                        </Button>
                    </>
                )}
            </Form>
        </section>
    );
};

export default Filters;
