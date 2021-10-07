import React from 'react';
import styles from './Navbar.module.css'
import {AddPostBtn} from "../AddPostBtn/AddPostBtn";
import Link from 'next/link'

export const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <div className={styles.nav__item}>
          <Link href='/'>
            <a className={styles.logo}>NEXT | BLOG</a>
          </Link>
            <AddPostBtn/>
        </div>
      </nav>
  );
};


