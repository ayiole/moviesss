import { useEffect, useState } from 'react'
import CardsList from '../../components/cardsList/cardsList'
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
        console.log(data)
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

export default MainPage
