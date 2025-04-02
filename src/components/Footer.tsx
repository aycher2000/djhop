import Link from 'next/link';
import styles from './Footer.module.css';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <Logo size={40} />
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/chrishopbarton" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/17xq2EXy4y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={styles.disabledLink}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.disabledLink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Dj H.O.P. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}