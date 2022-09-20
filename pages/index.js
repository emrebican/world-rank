import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Countries from '../components/Countries'

const Home = ({ countries }) => {
  console.log(countries)
  return (
    <Layout>
      <Search countries={countries} />
      <Countries countries={countries} />
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
