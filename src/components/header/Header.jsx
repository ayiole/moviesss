import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link to='/' className={styles.link}>
              Главная
            </Link>
          </li>
          <li>
            <Link to='/favourite' className={styles.link}>Избранное</Link>
          </li>
          <li>
            <Link to='/addMovie' className={styles.link}>Добавить фильм</Link>
          </li>
          <li>
            <Link to='/genres' className={styles.link}>Жанры</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
