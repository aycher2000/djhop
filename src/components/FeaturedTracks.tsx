import BandcampEmbed from './BandcampEmbed';
import styles from './FeaturedTracks.module.css';

export default function FeaturedTracks() {
  const trackData = [
    { albumId: '3673844050', trackId: '16049382' },
    { albumId: '3673844050', trackId: '3646414286' },
    { albumId: '3673844050', trackId: '1065144499' }
  ];

  return (
    <section className={styles.featuredTracks}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Tracks</h2>
        {trackData.map((track, index) => (
          <BandcampEmbed 
            key={index}
            albumId={track.albumId}
            trackId={track.trackId}
          />
        ))}
      </div>
    </section>
  );
}