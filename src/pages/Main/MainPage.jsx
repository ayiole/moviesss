import { useEffect } from 'react'
import useHttp from '../../hooks/useHttp'
import styles from './mainPage.module.scss'

const MainPage = () => {
  const { sendRequest: sendMoviesRequest } = useHttp()

  useEffect(() => {
    sendMoviesRequest({
      
    })
  }, [sendMoviesRequest])

  return <></>
}

export default MainPage
