import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Meta from './Meta'
import Footer from './Footer'
import ThemeButton from './ThemeButton'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <ThemeButton />
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="/Logo.svg" alt="icon" />
          </a>
        </Link>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
