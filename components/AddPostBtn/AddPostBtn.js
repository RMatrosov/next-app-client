import React from 'react';
import styles from './AddPostBtn.module.css'
import Link from 'next/link'

export const AddPostBtn = () => {
  return (
      <Link href='/add-post'>
        <button className={styles.add__post_btn}>
          Добавить статью
        </button>
      </Link>
  );
};

