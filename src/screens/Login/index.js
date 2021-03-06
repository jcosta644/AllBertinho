import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

import { withFormik } from 'formik';
import * as Yup from 'yup';
import BaseForm from '../../components/FormLogin/BaseForm';


//formik

function Login() {
  const dispatch = useDispatch();

  function submitUser({email, password}) {
    dispatch(actions.signInRequest(email, password));
  }

  const FormLogin =
    withFormik ({
    mapPropsToValues({
      email,
      password,
    }) {
      return {
        email: '',
        password: '',
      }
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Este não é um email válido.').required('Este campo é obrigatório'),
      password: Yup.string().required('Este campo é obrigatório'),
    }),
    handleSubmit(clientInfo, { resetForm, setErrors, setSubmitting }) {

        submitUser(clientInfo);

        setSubmitting(false);
        resetForm();

    }//close handleSubmit
  })(BaseForm);

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Login</title>
      </Helmet>
      <Header />
      <main>
        <h2>Login!</h2>
        <FormLogin />
        <br />
        <p>Não tem cadastro? <Link to="/cadastro">Crie uma conta.</Link></p>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default Login;
