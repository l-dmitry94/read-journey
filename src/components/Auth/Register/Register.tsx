import Container from 'components/Container';
import Auth from '../Auth';
import CustomForm, { AuthType } from 'components/CustomForm';
import CustomInput from 'components/CustomInput';
import registerData from './registerData';
import validationSchema from './validationSchema';
import { IRegister } from './Register.types';
import scss from './Register.module.scss';

const Register = () => {
    return (
        <section>
            <Container>
                <Auth>
                    <CustomForm
                        authType={AuthType.Register}
                        validationSchema={validationSchema}
                    >
                        {(register, errors, touchedFields) => (
                            <div className={scss.inputsWrapper}>
                                {registerData.map(({ name, type, label }) => (
                                    <CustomInput
                                        key={name}
                                        name={name as keyof IRegister}
                                        type={type}
                                        register={register}
                                        error={errors[name]?.message}
                                        touched={touchedFields[name]}
                                        label={label}
                                    />
                                ))}
                            </div>
                        )}
                    </CustomForm>
                </Auth>
            </Container>
        </section>
    );
};

export default Register;
