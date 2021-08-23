import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({
  onSubmit,
  valueName,
  valueNumber,
  onChangeName,
  onChangeNumber,
  onClick,
}) => (
  <>
    <form onSubmit={onSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={valueName}
          onChange={onChangeName}
          className={styles.input}
        />
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={valueNumber}
            onChange={onChangeNumber}
            className={styles.input}
          />
        </label>
      </label>

      <button type="submit" onClick={onClick} className={styles.button}>
        Add contact
      </button>
    </form>
  </>
);

export default ContactForm;
