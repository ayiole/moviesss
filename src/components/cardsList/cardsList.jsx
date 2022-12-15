import styles from './cardsList.module.scss'
import Card from '../card/Card'

const CardsList = ({ movies, updateMovies, isFav = false, children }) => {
  return (
    <div className={styles.box}>
      {movies?.map((movie) => (
        <Card
          key={movie['0']}
          id={movie['0']}
          name={movie['1']}
          year={movie['2']}
          producer={movie['3']}
          duration={movie['4']}
          description={movie['5']}
          poster={movie['6']}
          backgroundImage={movie['7']}
          genres={movie['8']}
          isLiked={movie['9'] === '1'}
          updateMovies={() => updateMovies(movie['0'])}
          isFav={isFav}
        />
      ))}
    </div>
  )
}

export default CardsList
