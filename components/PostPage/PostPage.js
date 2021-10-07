import React from 'react';
import styles from './PostPage.module.css'
import axios from 'axios'
import {useRouter} from 'next/router'

const PostPage = ({post}) => {

  const router = useRouter()

  const removePost = async () => {
    const id = post._id;
    await axios.delete(`http://localhost:5000/api/post/remove/${id}`)
        .then(()=> router.push('/'))
  }

  return (
      <div className={styles.post__page_wrapper}>
        <div className={styles.post__page_text_wrapper}>
          <h3 className={styles.post__page_title}>
            {post && post.title}
          </h3>
          <p className={styles.post__page_text}>
            {post && post.text}
          </p>
        </div>
        <img src={post && post.imgUrl} alt="image"
             className={styles.post__page_image}/>
        <button className={styles.post__page_button}
        onClick={removePost}
        >Удалить статью</button>
      </div>
  );
};

export default PostPage;


