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

    addGenreRequest(
      {
        url: 'http://movies/addGenre.php',
        method: 'POST',
        body: {
          genre_name: event.target.genre.value,
        },
      },
      (data) => {
        console.log(data)
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
      <form onSubmit={(event) => addGenreHandler(event)}>
        <label>
          Добавить жанр
          <input name='genre' />
        </label>
        <button>Добавить</button>
      </form>

      <div>
        {genres?.map((genre) => (
          <div key={genre[0]}>
            <p>{genre[1]}</p>
            <CrossIcon onClick={() => deleteGenre(genre[0])} />
          </div>
        ))}
      </div>
    </>
  )
}

export default GenresPage
