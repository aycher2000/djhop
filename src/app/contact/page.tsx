import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import InstagramFeed from '@/components/InstagramFeed';
import styles from './page.module.css';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DJ H.O.P - Contact | Get in Touch',
  description: 'Connect with DJ H.O.P for bookings, inquiries, or collaborations. View Instagram feed and reach out through our contact forms.',
  keywords: ['DJ H.O.P contact', 'book a DJ', 'DJ booking', 'hip-hop artist contact', 'music collaboration', 'Instagram feed'],
};

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      {/* JSON-LD structured data for search engines and AI crawlers */}
      <Script id="contact-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact DJ H.O.P",
          "description": "Get in touch with DJ H.O.P for bookings, inquiries, or collaborations.",
          "mainEntity": {
            "@type": "Person",
            "name": "DJ H.O.P",
            "sameAs": [
              "https://www.instagram.com/chrishopbarton",
              "https://www.facebook.com/share/17xq2EXy4y/?mibextid=wwXIfr"
            ]
          },
          "potentialAction": {
            "@type": "CommunicateAction",
            "name": "Contact Form",
            "target": "https://djhop.vercel.app/contact"
          }
        })
      }} />
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