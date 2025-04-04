import VideoGrid from '@/components/VideoGrid';
import Gallery from '@/components/Gallery';
import AppleMusicEmbed from '@/components/AppleMusicEmbed';
import styles from './page.module.css';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DJ H.O.P - Portfolio | Music, Videos & Album Artwork',
  description: 'Browse DJ H.O.P\'s portfolio featuring music tracks, performance videos, album artwork, and collaborations spanning decades in hip-hop.',
  keywords: ['DJ H.O.P portfolio', 'turntablist videos', 'hip-hop albums', 'scratch DJ', 'music production', 'vinyl records', 'DJ performances'],
};

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
    <div className={styles.portfolioPage}>
      {/* JSON-LD structured data for search engines and AI crawlers */}
      <Script id="portfolio-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "DJ H.O.P Portfolio",
          "description": "A collection of DJ H.O.P's work through the years, including videos, album artwork, and music tracks.",
          "mainEntity": {
            "@type": "MusicGroup",
            "name": "DJ H.O.P",
            "member": {
              "@type": "Person",
              "name": "DJ H.O.P"
            }
          },
          "hasPart": [
            {
              "@type": "VideoObject",
              "name": "DJ H.O.P Performance",
              "description": "Performance video featuring DJ H.O.P's turntablism skills",
              "embedUrl": "https://www.youtube.com/embed/fEuHaelQuN4",
              "contentUrl": "https://www.youtube.com/watch?v=fEuHaelQuN4"
            },
            {
              "@type": "MusicAlbum",
              "name": "NMCL 2004",
              "image": "https://djhop.vercel.app/images/album1-large.jpg",
              "byArtist": {
                "@type": "MusicGroup",
                "name": "DJ H.O.P"
              }
            },
            {
              "@type": "MusicAlbum",
              "name": "CaptureTheFlag 2001",
              "image": "https://djhop.vercel.app/images/album2-large.jpg",
              "byArtist": {
                "@type": "MusicGroup",
                "name": "DJ H.O.P"
              }
            }
          ]
        })
      }} />
      {/* Hero Section */}
      <section className={styles.portfolioHero}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Portfolio</h1>
          <p className={styles.pageSubtitle}>A collection of my work through the years</p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Videos</h2>
          <div className={styles.videoSection}>
            <VideoGrid videoIds={videos} />
          </div>
        </div>
      </section>

      {/* Album & DVD Covers Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Album & DVD Covers</h2>
          <div className={styles.gallerySection}>
            <Gallery items={galleryItems} />
          </div>
        </div>
      </section>

      {/* Apple Music Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Stream on Apple Music</h2>
          <div className={styles.musicSection}>
            <AppleMusicEmbed albumId="884962011" songId="884962165" />
          </div>
        </div>
      </section>
    </div>
  );
}