import styles from '../../styles/Country.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatNumber } from '../../utilities/formatNumber'

const countryDetails = ({ country }) => {
  console.log(country[0])
  country = country[0]
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Image
            src={country.flags.png}
            alt="flag"
            width={355}
            height={227}
            objectFit="cover"
            className={styles.flag}
          />

          <div className={styles.country_name}>{country.name.common}</div>
          <div className={styles.country_region}>{country.region}</div>
          <div className={styles.country_info}>
            <div className={styles.population}>
              <p className={styles.top}>{formatNumber(country.population)}</p>
              <span className={styles.bottom}>Population</span>
            </div>
            <div className={styles.area}>
              <p className={styles.top}>{formatNumber(country.area)}</p>
              <span className={styles.bottom}>Area (km)</span>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <h2 className={styles.detail}>Details</h2>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.id}`)
  const country = await res.json()

  return {
    props: {
      country
    }
  }
}

export default countryDetails
