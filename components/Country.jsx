import styles from '../styles/Countries.module.css'
import Image from 'next/image'
import Progress from './Progress'
import { formatNumber } from '../utilities/formatNumber'
import { getGini } from '../utilities/getValue'

const Country = ({ country }) => {
  return (
    <div className={styles.row}>
      <section className={styles.section}>
        <div className={styles.flag}>
          <Image
            src={country.flags?.png}
            alt={country.name}
            width={50}
            height={38}
            objectFit="cover"
          />
        </div>
        <div className={styles.name}>{country.name.common}</div>
      </section>
      <div className={styles.population}>
        {formatNumber(country.population)}
      </div>
      <div className={styles.area}>{formatNumber(country.area)}</div>
      <div className={styles.gini}>
        <Progress progress={getGini(country)} />
      </div>
    </div>
  )
}

export default Country
