import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/solo.JPG" 
              alt="DJ H.O.P." 
              width={300} 
              height={300}
              className={styles.heroImage}
              priority
            />
          </div>
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