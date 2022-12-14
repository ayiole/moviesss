import classNames from 'classnames'
import { useState } from 'react'
import useHttp from '../../hooks/useHttp'
import CrossIcon from '../cross/Cross'
import styles from './card.module.scss'

const Card = ({
  id,
  name,
  year,
  producer,
  duration,
  description,
  genres,
  poster,
  backgroundImage,
  isLiked,
  updateMovies,
  isFav,
}) => {
  const { sendRequest: sendFavouriteRequest } = useHttp()
  const { sendRequest: deleteMovieRequest } = useHttp()
  const [isLikedState, setIsLikedState] = useState(isLiked)

  const toggleFavourite = (id, isLiked) => {
    sendFavouriteRequest(
      {
        url: isLiked
          ? 'vendor/deleteFavorites.php'
          : 'vendor/addFavorites.php',
        method: 'POST',
        body: {
          movie_id: id,
        },
      },
      (data) => {
        setIsLikedState(data.isLiked)
        isFav && updateMovies()
      }
    )
  }

  const deleteMovie = (id) => {
    deleteMovieRequest({
      url: `vendor/deleteMovie.php?movie_id=${id}`,
      method: 'POST',
    })

    updateMovies()
  }

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.header}>
          <img
            className={styles.poster}
            src={'vendor/' + poster}
            alt='movie'
          />
          <div className={styles.data}>
            <h1>{name}</h1>
            <h4>{`${year}, ${producer}`}</h4>
            <div className={styles.box}>
              <span className={styles.minutes}>{duration} min</span>
              <p className={styles.type}>{genres}</p>
            </div>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.favourite}>
          <LikeIcon
            isLiked={isLikedState}
            onClick={(isLiked) => toggleFavourite(id, isLiked)}
          />
          <CrossIcon
            crossClassName={styles.cross}
            onClick={() => deleteMovie(id)}
          />
        </div>
      </div>
      <div
        className={styles.back}
        style={{
          backgroundImage: `url(vendor/${backgroundImage})`,
        }}
      ></div>
    </div>
  )
}

const LikeIcon = ({ isLiked, onClick }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 51.997 51.997'
      className={classNames(styles.likesIcon, isLiked && styles.likesIconLiked)}
      onClick={() => onClick(isLiked)}
    >
      <path
        d='M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
	c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
	c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
	C52.216,18.553,51.97,16.611,51.911,16.242z'
        fill='current'
      />
    </svg>
  )
}

export default Card
