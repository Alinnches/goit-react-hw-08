import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const openModal = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete));
    }
    closeModal();
  };

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={s.contactItem}>
              <p>
                {name}: {number}
              </p>
              <button onClick={() => openModal(id)} className={s.deleteBtn}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className={s.noContacts}>No contacts found.</p>
        )}
      </ul>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this contact?"
      />
    </>
  );
};

export default ContactList;
