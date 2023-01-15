import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.scss"

const SignupSchema = Yup.object().shape({
email: Yup.string().email('Email inválido!').required('Requerido'),
password: Yup.string()
.required('Requerido'),
});

const Login = () =>{


   return(
<div className={styles.container}>
<h1>Login</h1>

<Formik
initialValues={{
email: '',
password: '',
}}
validationSchema={SignupSchema}
onSubmit={values => {
console.log(values);
}}
>

{({ errors, touched, values }) => (
<Form>
<label>Email:</label>
<Field className={styles.inputForm} name="email" type="email" placeholder="Digite seu Email..." />
<label>Senha:</label>
{errors.email && touched.email ? <div>{errors.email}</div> : null}
<Field className={styles.inputForm} name="password" type="password" placeholder="Digite sua senha..." />
{errors.password && touched.password ? <div>{errors.password}</div> : null}
        <button className={styles.buttonForm} type="submit">Entrar</button>
      </Form>
    )}
</Formik>
</div>
   )
}

export default Login
