import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.scss"
import Api from '../../service/api';




import axios from 'axios';

const API_URL = 'http://localhost:3000';



//Teste de conexão lembrar de excluir
const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/person`);
    //console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getData();




//Regras de input
const SignupSchema = Yup.object().shape({
   name: Yup.string()
      .min(2, 'Curto demais!')
      .max(50, 'Muito grande!')
      .required('Requerido'),
   dateOfBirth: Yup.date()
      .required('Requerido'),
   email: Yup.string().email('Email inválido!').required('Requerido'),
   password: Yup.string()
      .min(8, 'Curta demais!')

      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
         'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um número e um caractere especial.'
      )
      .required('Requerido'),
   confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas tem que ser igual!')
      .required('Requerido'),
   gender: Yup.string().required('Requerido')
});

const Register = () => {


 
  
   
   return (
      <div className={styles.container}>
        
         <div className={styles.box}>
            <h1 className={styles.title}>Cadastrar-se</h1>
            <Formik
               initialValues={{
                  name: '',
                  email: '',
                  dateOfBirth:'',
                  password: '',
                  confirmpassword: '',
                  gender: ''
               }}
               validationSchema={SignupSchema}
               onSubmit={async(values)=> {
                  try {
                     await Api.post('/person', values);
                     alert("Usuário cadastrado com sucesso!")
                     
                   } catch (error) {
                     console.log(error, "Erro ao cadastrar usuário");
                   }
                   
               }}
            >
               {({ errors, touched, values }) => (
                  <Form>
                     <label>Nome completo:
                        <Field className={styles.inputForm} name="name" placeholder="Nome completo..." />
                     </label>
                     {errors.name && touched.name ? (
                        <div className={styles.error}>{errors.firstName}</div>
                     ) : null}
                     <label>
                        Data de Nascimento:
                        <Field
                           className={styles.inputForm}
                           name="dateOfBirth"
                           type="date"
                           placeholder="Insira sua data de nascimento"
                        />
                     </label>
                     {errors.dateOfBirth && touched.dateOfBirth ? (
                        <div className={styles.error}>{errors.dateOfBirth}</div>
                     ) : null}

                     <label>Email:
                        <Field className={styles.inputForm} name="email" type="email" placeholder="Digite seu Email..." />
                     </label>
                     {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}
                     <label>Senha:
                        <Field className={styles.inputForm} name="password" type="password" placeholder="Crie uma senha..." />
                     </label>
                     {errors.password && touched.password ? <div className={styles.error}>{errors.password}</div> : null}
                     <label>
                        Confirmar senha:
                        <Field className={styles.inputForm} name="confirmpassword" type="password" placeholder="Confirme sua senha..." />
                     </label>
                     {errors.confirmpassword && touched.confirmpassword ? <div className={styles.error}>{errors.confirmpassword}</div> : null}
                     <label>
                        Gênero:
                        <br />
                        <Field className={styles.buttonRadio} name="gender" type="radio" value="masculino"
                           checked={values.gender === 'masculino'} />
                        Masculino
                        <Field className={styles.buttonRadio} name="gender" type="radio" value="feminino"
                           checked={values.gender === 'feminino'} />
                        Feminino
                        <br />
                        <Field className={styles.buttonRadio} name="gender" type="radio" value="não informar"
                           checked={values.gender === 'não informar'} />
                        Não informar
                     </label>
                     <button className={styles.buttonForm} type="submit">Cadastrar</button>
                  </Form>
               )}
            </Formik>
            <Link to="/">Já é cadastrado?</Link>
         </div>

      </div>
   )
}

export default Register