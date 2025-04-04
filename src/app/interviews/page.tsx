import Interview from '@/components/Interview';
import styles from './page.module.css';
import './interviews-fix.css';

export default function Interviews() {
  return (
    <div className={styles.interviewContainer}>
      <div className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Interviews</h1>
          <Interview />
        </div>
      </div>
    </div>
  );
}