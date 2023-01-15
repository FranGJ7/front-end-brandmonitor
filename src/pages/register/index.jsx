import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.scss"

const SignupSchema = Yup.object().shape({
firstName: Yup.string()
.min(2, 'Curto demais!')
.max(50, 'Muito grande!')
.required('Requerido'),
email: Yup.string().email('Email inválido!').required('Requerido'),
password: Yup.string()
.min(8, 'Curta demais!')
.required('Requerido'),
confirmPassword: Yup.string()
.oneOf([Yup.ref('password'), null], 'As senhas tem que ser igual!')
.required('Requerido'),
gender: Yup.string().required('Requerido')
});

const Register = () => {
return (
<div className={styles.container}>
<h1>Cadastrar-se</h1>
<Formik
initialValues={{
firstName: '',
email: '',
password: '',
confirmPassword: '',
gender: ''
}}
validationSchema={SignupSchema}
onSubmit={values => {
console.log(values);
}}
>
{({ errors, touched, values }) => (
<Form>
<Field className={styles.inputForm} name="firstName" placeholder="Nome completo" />
{errors.firstName && touched.firstName ? (
<div>{errors.firstName}</div>
) : null}
<Field className={styles.inputForm} name="email" type="email" placeholder="Digite seu Email" />
{errors.email && touched.email ? <div>{errors.email}</div> : null}
<Field className={styles.inputForm} name="password" type="password" placeholder="Crie uma senha" />
{errors.password && touched.password ? <div>{errors.password}</div> : null}
<Field className={styles.inputForm} name="confirmPassword" type="password" placeholder="Confirme sua senha" />
{errors.confirmPassword && touched.confirmPassword ? <div>{errors.confirmPassword}</div> : null}
<label>
Gênero:
<Field name="gender" type="radio" value="masculino"
checked={values.gender === 'masculino'} />
Masculino
<Field name="gender" type="radio" value="feminino"
checked={values.gender === 'feminino'} />
Feminino
<Field name="gender" type="radio" value="não informar"
checked={values.gender === 'não informar'} />
Não informar
</label>
        <button className={styles.buttonForm} type="submit">Submit</button>
      </Form>
    )}
  </Formik>
</div>
)
}

export default Register