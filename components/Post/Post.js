import React from 'react';
import styles from './Post.module.css'
import Link from 'next/link'

const Post = ({id, title, imgUrl}) => {
  return (
      <Link href={`/post/${id}`} as={`/post/${id}`}>
        <a className={styles.post} style={{background: `url(${imgUrl})`}}>
          <div className={styles.title}>{title}</div>
        </a>
      </Link>
  );
};

export default Post;
