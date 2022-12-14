import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Countries from '../components/Countries'
import { useEffect } from 'react'
useEffect

const Home = ({ countries }) => {
  const searchQuery = useSelector((state) => state.world.searchQuery)

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchQuery) ||
      country.region.toLowerCase().includes(searchQuery) ||
      country.subregion?.toLowerCase().includes(searchQuery)
  )

  return (
    <Layout>
      <Search countries={filteredCountries} />
      <Countries countries={filteredCountries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  return {
    props: {
      countries
    }
  }
}

export default Home
