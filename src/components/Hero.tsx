import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h2 className={styles.title}>Welcome</h2>
          <p className={styles.subtitle}>If you&apos;re reading this, you&apos;re already infected...</p>
          <Link href="/portfolio" className={styles.btn}>
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}