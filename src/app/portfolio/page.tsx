import VideoGrid from '@/components/VideoGrid';
import Gallery from '@/components/Gallery';
import AppleMusicEmbed from '@/components/AppleMusicEmbed';
import styles from './page.module.css';

export default function Portfolio() {
  // YouTube video IDs from the original site
  const videos = [
    'fEuHaelQuN4',
    'LA1qmmRgmCI',
    '80FoctgaDUA'
  ];

  // Album/DVD artwork gallery items
  const galleryItems = [
    {
      id: 1,
      thumbSrc: '/images/album1-thumb.jpg',
      largeSrc: '/images/album1-large.jpg',
      title: 'NMCL 2004'
    },
    {
      id: 2,
      thumbSrc: '/images/album2-thumb.jpg',
      largeSrc: '/images/album2-large.jpg',
      title: 'CaptureTheFlag 2001'
    },
    {
      id: 3,
      thumbSrc: '/images/dvd1-thumb.jpg',
      largeSrc: '/images/dvd1-large.jpg',
      title: 'QBert DIY2 F/Dj H.O.P'
    },
    {
      id: 4,
      thumbSrc: '/images/dvd2-thumb.jpg',
      largeSrc: '/images/dvd2-large.jpg',
      title: 'Bay Exports F/ Dj H.O.P'
    }
  ];

  return (
    <div className={styles.portfolioContent}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Portfolio</h1>
          
          <h2 className={styles.sectionTitle}>Featured Videos</h2>
          <VideoGrid videoIds={videos} />
          
          <h2 className={styles.sectionTitle}>Album & DVD Covers</h2>
          <Gallery items={galleryItems} />
          
          <h2 className={styles.sectionTitle}>Stream on Apple Music</h2>
          <AppleMusicEmbed albumId="884962011" songId="884962165" />
        </div>
      </section>
    </div>
  );
}