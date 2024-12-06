import { Path } from 'react-hook-form';
import { IFilterData } from 'types/filters.types';

import Button from 'components/ui/Button';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import filtersFields from './filters-fields.json';
import validationSchema from './validationSchema';

import scss from './Filters.module.scss';

const Filters = () => {
    const handleSubmit = (data: IFilterData) => console.log(data);

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
