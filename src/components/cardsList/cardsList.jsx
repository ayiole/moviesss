import styles from './cardsList.module.scss'
import Card from '../card/Card'

const CardsList = ({ movies, children }) => {
  return (
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
  )
}

export default CardsList
