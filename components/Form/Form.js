import React, {useState} from 'react';
import styles from './Form.module.css'
import axios from 'axios'
import {useRouter} from 'next/router'

const Form = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const router = useRouter()

  const addPost = async () => {
    try {
      await axios.post('http://localhost:5000/api/post/add', {
        title, text, imgUrl
      }).then(()=> router.push('/'))
    } catch (e) {
      console.log(e)
    }
  }

  return (
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <label htmlFor="" className={styles.form__label_top}>
          Название статьи:
          <input type="text" className={styles.form__input_top}
                 onChange={(e) => setTitle(e.target.value)}/>
        </label>

        <label htmlFor="" className={styles.form__label_textfield}>
          Текст статьи:
          <textarea type="text" className={styles.form__input_textfield}
                    onChange={(e) => setText(e.target.value)}/>
        </label>

        <label htmlFor="" className={styles.form__label_botton}>
          URL картинки:
          <input type="text" className={styles.form__input_botton}
                 onChange={(e) => setImgUrl(e.target.value)}/>
        </label>
        <button className={styles.form__button}
        onClick={addPost}
        >Добавить</button>
      </form>
  );
};

export default Form;
