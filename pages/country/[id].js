import styles from '../../styles/Country.module.css'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Progress from '../../components/Progress'

import { formatNumber } from '../../utilities/formatNumber'
import { objectToArray } from '../../utilities/objectToArray'
import { getCurr, getNative, getGini } from '../../utilities/getGini'

const countryDetails = ({ country }) => {
  country = country[0]
  console.log(country)

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
          <div className={styles.content}>
            <span className={styles.title}>capital</span>
            <p className={styles.text}>{country.capital[0]}</p>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>subregion</span>
            <p className={styles.text}>{country.subregion}</p>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>languages</span>
            <p className={styles.text}>
              {objectToArray(country.languages).map((lang, i) => (
                <span key={i}>{lang + ' '}</span>
              ))}
            </p>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>currencies</span>
            <p className={styles.text}>
              {objectToArray(getCurr(country)).map((curr, i) => (
                <span key={i}>{curr + ' '}</span>
              ))}
            </p>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>native name</span>
            <p className={styles.text}>
              {getNative(country.name.nativeName).common}
            </p>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>gini</span>
            <span className={styles.gini}>
              <Progress progress={getGini(country)} />
            </span>
          </div>
          <div className={styles.last_content}>
            <span className={styles.title}>neighbouring countries</span>
          </div>
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
