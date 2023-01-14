import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from "./styles.module.scss"

const SignupSchema = Yup.object().shape({
firstName: Yup.string()
.min(2, 'Too Short!')
.max(50, 'Too Long!')
.required('Required'),
email: Yup.string().email('Invalid email').required('Required'),
password: Yup.string()
.min(8, 'Too Short!')
.required('Required'),
confirmPassword: Yup.string()
.oneOf([Yup.ref('password'), null], 'Passwords must match')
.required('Required'),
gender: Yup.string().required('Required')
});

const Register = () => {
return (
<div>
<h1>Cadastrar-se</h1>
<Formik
initialValues={{
firstName: '',
lastName: '',
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
<Field name="firstName" placeholder="Nome completo" />
{errors.firstName && touched.firstName ? (
<div>{errors.firstName}</div>
) : null}
<Field name="email" type="email" placeholder="Digite seu Email" />
{errors.email && touched.email ? <div>{errors.email}</div> : null}
<Field name="password" type="password" placeholder="Crie uma senha" />
{errors.password && touched.password ? <div>{errors.password}</div> : null}
<Field name="confirmPassword" type="password" placeholder="Confirme sua senha" />
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
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
</div>
)
}

export default Register