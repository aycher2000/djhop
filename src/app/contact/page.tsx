import ContactForm from '@/components/ContactForm';
import BookingForm from '@/components/BookingForm';
import InstagramFeed from '@/components/InstagramFeed';
import styles from './page.module.css';

export default function Contact() {
  // Instagram post data
  const instagramPosts = [
    {
      id: 1,
      imageSrc: '/images/ig1.jpg',
      caption: 'Johnny Blaze and one of the best DJs on the planet - Cutting Edge.',
      link: 'https://www.instagram.com/p/CPKpbjKrNff0yoZvrJH66g0pjvtbn8QnTOm6Kg0/'
    },
    {
      id: 2,
      imageSrc: '/images/ig2.jpg',
      caption: 'Rest in power Etch! Icons.. 7Blocc!',
      link: 'https://www.instagram.com/p/CPHgZbtLseSwOnK8cK9EBxlPqgNDQ204psuO5k0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      id: 3,
      imageSrc: '/images/ig3.jpg',
      caption: '7 Blocc throwback!',
      link: 'https://www.instagram.com/p/CPGx0q2L6g95o2VxX1F-LHP-jCkvgLLLBSZCzk0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    }
  ];

  return (
    <div className={styles.contactContainer}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Contact</h1>
        
        <div className={styles.contactSection}>
          <ContactForm />
          <BookingForm />
        </div>
        
        <div className={styles.instagramSection}>
          <InstagramFeed posts={instagramPosts} />
        </div>
      </div>
    </div>
  );
}