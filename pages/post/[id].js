import React from 'react';
import Head from "next/head";
import {Navbar} from "../../components/Navbar/Navbar";
import styles from "../../styles/Home.module.css";
import BackBtn from "../../components/BackBtn/BackBtn";
import PostPage from "../../components/PostPage/PostPage";


const PostId = ({post}) => {

  if (!post) {
    return 'Loading...'
  }
  return (
      <div>
        <Head>
          <title>Post</title>
        </Head>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div style={{paddingTop: 30}}>
              <BackBtn/>
            </div>
            <PostPage post={post}/>
          </div>
        </div>
      </div>
  );
};

export default PostId;

export async function getServerSideProps(context) {

  const res = await fetch(`http://localhost:5000/api/post/${context.query.id}`)
  const post = await res.json()
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {post},
  }
}
