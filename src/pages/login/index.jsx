import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.scss"
import Api from '../../service/api';

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Email inválido!').required('Requerido'),
   password: Yup.string()
      .required('Requerido'),
});

const Login = () => {


   return (
      <div className={styles.container}>
         <div className={styles.box}>
            <h1 className={styles.title}>Login</h1>

            <Formik
               initialValues={{
                  email: '',
                  password: '',
               }}
               validationSchema={SignupSchema}
               onSubmit={async(values) => {
                  console.log(values);
                  try {
                     await Api.post('/auth/login', values);
                     alert("Sucesso!")
                   } catch (error) {
                     console.log(error, "Erro no login do usuário");
                   }
               }}
            >

               {({ errors, touched, values }) => (
                  <Form>
                     <label>Email:
                        <Field className={styles.inputForm} name="email" type="email" placeholder="Digite seu Email..." />
                     </label>
                     {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}
                     <label>Senha:
                        <Field className={styles.inputForm} name="password" type="password" placeholder="Digite sua senha..." />
                     </label>
                     {errors.password && touched.password ? <div className={styles.error}>{errors.password}</div> : null}
                     <button className={styles.buttonForm} type="submit">Entrar</button>
                  </Form>
               )}
            </Formik>
            <Link to="/register">Não é cadastrado?</Link>
         </div>
      </div>
   )
}

export default Login
