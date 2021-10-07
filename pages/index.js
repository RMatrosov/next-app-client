import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Navbar} from "../components/Navbar/Navbar";
import Post from "../components/Post/Post";


export default function Home({posts}) {
  if (!posts) {
    return 'Loading...'
  }

  return (
      <div>
        <Head>
          <title>Next App</title>
        </Head>
        <Navbar/>
        <div className={styles.wrapper}>
          <div className='container'>
            <div className={styles.posts__wrapper}>
              {posts.data && posts.data.map((post) => <Post key={post._id}
                                                            id={post._id}
                                                            title={post.title}
                                                            imgUrl={post.imgUrl}
              />)}

            </div>
          </div>
        </div>
      </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:5000/api/post`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {posts},
  }
}
