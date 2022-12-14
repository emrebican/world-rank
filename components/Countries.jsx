import styles from '../styles/Countries.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Country from './Country'

import { orderBy } from '../utilities/orderBy'
import { SortArrow } from '../utilities/sortArrow'

const Countries = ({ countries }) => {
  const [direction, setDirection] = useState()
  const [value, setValue] = useState()

  const orderedCountries = orderBy(countries, value, direction)

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc')
    } else if (direction === 'desc') {
      setDirection('asc')
    } else {
      setDirection(null)
    }
  }

  const setOrder = (value) => {
    switchDirection()
    setValue(value)
  }

  return (
    <div>
      <div className={styles.heading}>
        <button onClick={() => setOrder('name')}>
          Name
          {value === 'name' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrder('population')}>
          Population
          {value === 'population' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrder('area')} className={styles.hidden}>
          Area (km)
          {value === 'area' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrder('gini')} className={styles.hidden}>
          Gini
          {value === 'gini' && <SortArrow direction={direction} />}
        </button>
      </div>
      <div className={styles.container}>
        {orderedCountries.map((country) => (
          <Link key={country.cca3} href={`/country/${country.cca3}`}>
            <a>
              <Country country={country} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Countries
