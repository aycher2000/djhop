import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>About</h1>
        
        <div className={styles.aboutContent}>
          <p>Coming soon - This page is under construction.</p>
          <p>Check back later for more information about Dj H.O.P.</p>
        </div>
      </div>
    </div>
  );
}