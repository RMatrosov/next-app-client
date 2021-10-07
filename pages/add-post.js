import React from 'react';
import Head from "next/head";
import {Navbar} from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import BackBtn from "../components/BackBtn/BackBtn";
import Form from "../components/Form/Form";

const AddPost = () => {


  return (
      <div>
        <Head>
          <title>Add</title>
        </Head>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div style={{paddingTop: 30}}>
              <BackBtn/>
            </div>
            <div className={styles.formWrapper}>
              <Form/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddPost;
