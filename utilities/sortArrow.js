import styles from '../styles/Countries.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

import { DESC } from './constants'

export const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>
  }
  if (direction === DESC) {
    return <IoIosArrowDown className={styles.arrow} />
  } else {
    return <IoIosArrowUp className={styles.arrow} />
  }
}
