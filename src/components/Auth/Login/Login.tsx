import Container from 'components/Container';
import Auth from '../Auth';
import CustomForm, { AuthType } from 'components/CustomForm';
import scss from './Login.module.scss';
import CustomInput from 'components/CustomInput';
import { ILogin } from './Login.types';
import loginData from './loginData';

const Login = () => {
    return (
        <section>
            <Container>
                <Auth>
                    <CustomForm authType={AuthType.Login}>
                        {(register, errors) => (
                            <div className={scss.inputsWrapper}>
                                {loginData.map(({ name, type, label }) => (
                                    <CustomInput
                                        key={name}
                                        name={name as keyof ILogin}
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

export default Login;
