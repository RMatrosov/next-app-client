import React from 'react';
import styles from './BackBtn.module.css'
import Link from 'next/link'

const BackBtn = () => {
  return (
      <Link href='/'>
        <button className={styles.back__btn}>
          Назад
        </button>
      </Link>
  );
};

export default BackBtn;
