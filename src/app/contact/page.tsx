import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import InstagramFeed from '@/components/InstagramFeed';
import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Contact</h1>
        
        <div className={styles.contactSection}>
          <ContactForm />
          <BookingForm />
        </div>
        
        <div className={styles.instagramSection}>
          <InstagramFeed />
        </div>
      </div>
    </div>
  );
}