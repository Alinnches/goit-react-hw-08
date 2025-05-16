import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const initialValues = {
  contactname: "",
  contactnumber: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, actions) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === values.contactname.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.contactname} is already in contacts`);
      return;
    }

    const newContact = {
      name: values.contactname,
      number: values.contactnumber,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const contactFormSchema = Yup.object().shape({
    contactname: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    contactnumber: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.formContainer}>
        <label htmlFor={nameFieldId} className={s.contactname}>
          Name
        </label>
        <Field
          className={s.contactField}
          type="text"
          name="contactname"
          id={nameFieldId}
        />
        <ErrorMessage
          className={s.errorMessage}
          name="contactname"
          component="span"
        />

        <label htmlFor={numberFieldId} className={s.contactnumber}>
          Number
        </label>
        <Field
          className={s.contactField}
          type="text"
          name="contactnumber"
          id={numberFieldId}
        />
        <ErrorMessage
          className={s.errorMessage}
          name="contactnumber"
          component="span"
        />

        <button className={s.addBtn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
