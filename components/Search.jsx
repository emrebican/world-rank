import styles from '../styles/Search.module.css'
import { GoSearch } from 'react-icons/go'

const Search = ({ countries }) => {
  return (
    <section className={styles.section}>
      <p className={styles.found}>Found {countries.length} countries</p>
      <div className={styles.wrapper}>
        <GoSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Filter by Name, Region, Sebregion"
          className={styles.input}
        />
      </div>
    </section>
  )
}

export default Search
