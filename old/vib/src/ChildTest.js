import React from 'react';
import styles from './childTest.module.css';

const ChildTest = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>
    </div>
  );
};

export default ChildTest;
