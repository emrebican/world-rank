import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/emrebican">
        <a>emrebican </a>
      </Link>
      @ devchallenges.io
    </footer>
  );
};

export default Footer;
