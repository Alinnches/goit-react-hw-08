import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().min(6, "Too short!").required("Required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label>Email</label>
        <Field type="email" name="email" className={s.input} />
        <ErrorMessage name="email" component="div" className={s.error} />

        <label>Password</label>
        <Field type="password" name="password" className={s.input} />
        <ErrorMessage name="password" component="div" className={s.error} />

        <button type="submit" className={s.submitBtn}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
