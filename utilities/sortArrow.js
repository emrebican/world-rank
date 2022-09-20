import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import styles from '../styles/Countries.module.css'

export const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>
  }
  if (direction === 'desc') {
    return <IoIosArrowDown className={styles.arrow} />
  } else {
    return <IoIosArrowUp className={styles.arrow} />
  }
}
