import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ friends, onDeleteContact }) => (
  <ul className={styles.contactList}>
    {friends.map(({ id, name, number }) => (
      <li key={id} className={styles.list}>
        <p>
          {name}:{number}
        </p>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
