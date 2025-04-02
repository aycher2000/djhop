import styles from './BandcampEmbed.module.css';

interface BandcampEmbedProps {
  albumId: string;
  trackId: string;
}

export default function BandcampEmbed({ albumId, trackId }: BandcampEmbedProps) {
  return (
    <div className={styles.bandcampEmbed}>
      <iframe 
        style={{ border: 0, width: '100%', height: '42px' }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=333333/linkcol=2ebd35/artwork=none/track=${trackId}/transparent=true/`}
        seamless
        title={`Bandcamp Track ${trackId}`}
      ></iframe>
    </div>
  );
}