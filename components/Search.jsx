import styles from '../styles/Search.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSearch } from '../features/worldSlice'
import { GoSearch } from 'react-icons/go'

const Search = ({ countries }) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(getSearch(e.target.value.toLowerCase().trim()))
  }

  useEffect(() => {
    dispatch(getSearch(''))
  }, [])

  return (
    <section className={styles.section}>
      <p className={styles.found}>
        Found {countries.length}{' '}
        {countries.length > 1 || countries.length === 0
          ? 'countries'
          : 'country'}
      </p>
      <div className={styles.wrapper}>
        <GoSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Filter by Name, Region, Sebregion"
          className={styles.input}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

export default Search
