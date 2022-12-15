import { useEffect, useState } from 'react'
import CardsList from '../../components/cardsList/cardsList'
import useHttp from '../../hooks/useHttp'
import styles from './favouritePage.module.scss'

const FavouritePage = () => {
  const { sendRequest: sendMoviesRequest } = useHttp()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    sendMoviesRequest(
      {
        url: 'http://movies/getMovies.php',
      },
      (data) => {
        setMovies(data)
      }
    )
  }, [sendMoviesRequest])

  return (
    <>
      <CardsList movies={movies} />
    </>
  )
}

export default FavouritePage
