import { useEffect, useState } from 'react'
import CrossIcon from '../../components/cross/Cross'
import useHttp from '../../hooks/useHttp'
import styles from './genresPage.module.scss'

const GenresPage = () => {
  const { sendRequest: sendGenresRequest } = useHttp()
  const { sendRequest: addGenreRequest } = useHttp()
  const { sendRequest: deleteGenreRequest } = useHttp()
  const [genres, setGenres] = useState([])

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

  const addGenreHandler = (event) => {
    event.preventDefault()

    const value = event.target.genre.value.trim()

    !!value &&
      addGenreRequest(
        {
          url: 'http://movies/addGenre.php',
          method: 'POST',
          body: {
            genre_name: value,
          },
        },
        (data) => {
          event.target.genre.value = ''
          setGenres(data)
        }
      )
  }

  const deleteGenre = (id) => {
    deleteGenreRequest(
      {
        url: `http://movies/deleteGenre.php?genre_id=${id}`,
        method: 'POST',
      },
      (data) => {
        setGenres(data)
      }
    )
  }

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => addGenreHandler(event)}
      >
        <label className={styles.label}>
          Добавить жанр
          <input
            className={styles.input}
            name='genre'
            placeholder='название жанра'
          />
        </label>
        <button className={styles.button}>добавить</button>
      </form>

      <div className={styles.box}>
        {genres?.map((genre) => (
          <div key={genre[0]} className={styles.genre}>
            <p className={styles.text}>{genre[1]}</p>
            <CrossIcon onClick={() => deleteGenre(genre[0])} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GenresPage
