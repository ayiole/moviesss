import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useHttp from '../../hooks/useHttp'
import styles from './addMoviePage.module.scss'

const AddMoviePage = () => {
  const { sendRequest: sendGenresRequest } = useHttp()
  const { sendRequest: sendAddMovieRequest } = useHttp()
  const [genres, setGenres] = useState([])
  const refForm = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    sendGenresRequest(
      {
        url: 'http://movies/getGenres.php',
      },
      (data) => {
        setGenres(data)
      }
    )
  }, [])

  const addMovieHandler = (event) => {
    event.preventDefault()

    const form = new FormData()

    form.append('name', refForm.current.name.value.trim())
    form.append('year', refForm.current.year.value.trim())
    form.append('producer', refForm.current.producer.value.trim())
    form.append('duration', refForm.current.duration.value.trim())
    form.append('description', refForm.current.description.value.trim())
    form.append('upfile', refForm.current.upfile.files[0])
    form.append('upfile2', refForm.current.upfile2.files[0])

    const checkboxes = []

    for (let i = 0; i < genres.length; i++) {
      const checkbox = refForm.current[`genre${i}`]

      if (checkbox.checked) {
        checkboxes.push(checkbox.value)
      }
    }

    form.append('genres', checkboxes)

    sendAddMovieRequest(
      {
        url: 'http://movies/addMovie.php',
        method: 'POST',
        body: form,
      },
      (data) => {
        navigate('/')
      }
    )
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => addMovieHandler(event)}
      ref={refForm}
    >
      <input
        className={styles.input}
        type='text'
        name='name'
        placeholder='Название'
        required
      />
      <input
        className={styles.input}
        type='number'
        name='year'
        min='1850'
        placeholder='Год'
        required
      />
      <input
        className={styles.input}
        type='text'
        name='producer'
        placeholder='Режиссер'
        required
      />
      <input
        className={styles.input}
        type='number'
        min='0'
        name='duration'
        placeholder='Длительность'
        required
      />
      <textarea
        className={styles.input}
        type='text'
        name='description'
        placeholder='Описание'
        style={{ resize: 'none', height: '200px' }}
        required
      />
      <label className={styles.fileLabel}>
        Добавить картинку
        <input
          className={styles.fileInput}
          type='file'
          name='upfile'
          required
        />
      </label>
      <label className={styles.fileLabel}>
        Добавить постер
        <input
          className={styles.fileInput}
          type='file'
          name='upfile2'
          required
        />
      </label>
      <div className={styles.box}>
        {genres?.map((genre, index) => (
          <div key={genre[0]} className={styles.box}>
            <input
              id={genre[0]}
              type='checkbox'
              value={genre[0]}
              name={`genre${index}`}
              className={styles.checkbox}
              onClick={(event) => console.log(event.target.checked)}
            />
            <label className={styles.label} htmlFor={genre[0]}>
              {genre[1]}
            </label>
          </div>
        ))}
      </div>
      <button className={styles.button}>Добавить фильм</button>
    </form>
  )
}

export default AddMoviePage
