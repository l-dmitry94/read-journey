import Container from 'components/Container';
import Auth from '../Auth';
import CustomForm, { AuthType } from 'components/CustomForm';
import CustomInput from 'components/CustomInput';
import registerData from './registerData';
import { IRegister } from './Register.types';
import scss from './Register.module.scss';

const Register = () => {
    return (
        <section>
            <Container>
                <Auth>
                    <CustomForm authType={AuthType.Register}>
                        {(register, errors) => (
                            <div className={scss.inputsWrapper}>
                                {registerData.map(({ name, type, label }) => (
                                    <CustomInput
                                        key={name}
                                        name={name as keyof IRegister}
                                        type={type}
                                        register={register}
                                        error={errors[name]?.message}
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
