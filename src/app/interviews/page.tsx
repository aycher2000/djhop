import Interview from '@/components/Interview';
import styles from './page.module.css';

export default function Interviews() {
  return (
    <div className={styles.interviewContainer}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Interviews</h1>
        <Interview />
      </div>
    </div>
  );
}