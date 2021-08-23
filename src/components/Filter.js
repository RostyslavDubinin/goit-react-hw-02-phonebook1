import React from "react";
import styles from "./Filter.module.css";
const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
    <h3>Find contacts by name</h3>
    <input value={value} onChange={onChange} className={styles.input} />
  </div>
);

export default Filter;
