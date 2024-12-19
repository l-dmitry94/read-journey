import { Path } from 'react-hook-form';

import Button from 'components/ui/Button';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';

import validationSchema from './validationSchema';

import scss from './AddReading.module.scss';

interface IReadingData {
    page: number;
}

const AddReading = () => {
    const handleSubmit = async (data: IReadingData) => {
        console.log(data);
    };

    return (
        <section className={scss.addReading}>
            <p className={scss.title}>Start page:</p>

            <Form<IReadingData>
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                defaultValues={{ page: 0 }}
            >
                {({ register, formState }) => (
                    <>
                        <div className={scss.inputsWrapper}>
                            <Input<IReadingData>
                                register={register}
                                name={'page' as Path<IReadingData>}
                                label="Page number"
                                type="number"
                                formState={formState}
                                noBorder
                            />
                        </div>

                        <Button type="submit" variant="outlined">
                            To start
                        </Button>
                    </>
                )}
            </Form>
        </section>
    );
};

export default AddReading;
