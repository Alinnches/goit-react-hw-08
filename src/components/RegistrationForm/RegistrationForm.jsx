import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Too short!").required("Required!"),
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().min(6, "Too short!").required("Required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>Name</label>
          <Field type="text" name="name" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <label>Email</label>
          <Field type="email" name="email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />

          <label>Password</label>
          <Field type="password" name="password" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />

          <button type="submit" className={s.submitBtn}>
            Register
          </button>
        </Form>
      </Formik>
      {error && <p className={s.error}>Error: {error}</p>}
    </div>
  );
};

export default RegistrationForm;
