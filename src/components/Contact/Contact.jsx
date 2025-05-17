import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/slice";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contactItem}>
      <p className={s.contact}>
        {name}: {number}
        <button className={s.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </p>
    </li>
  );
};

export default Contact;
