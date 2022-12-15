import { useEffect, useState } from 'react'
import useHttp from '../../hooks/useHttp'
import styles from './mainPage.module.scss'
import Card from '../../components/card/Card'

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
      <div className={styles.box}>
        {movies?.map((movie) => (
          <Card
            key={movie['0']}
            name={movie['0']}
            year={movie['1']}
            producer={movie['2']}
            duration={movie['3']}
            description={movie['4']}
            poster={movie['5']}
            backgroundImage={movie['6']}
            genres={movie['7']}
          />
        ))}
      </div>
    </>
  )
}

export default MainPage
