import { useEffect, useState } from 'react'
import CardsList from '../../components/cardsList/CardsList'
import useHttp from '../../hooks/useHttp'
import styles from './mainPage.module.scss'

const MainPage = () => {
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

  const updateMovies = (id) => {
    setMovies(movies.filter((movie) => movie['0'] !== id))
  }

  return (
    <>
      <CardsList movies={movies} updateMovies={(id) => updateMovies(id)} />
    </>
  )
}

export default MainPage
