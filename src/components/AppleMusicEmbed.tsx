import styles from './AppleMusicEmbed.module.css';

interface AppleMusicEmbedProps {
  albumId: string;
  songId?: string;
  height?: number;
}

export default function AppleMusicEmbed({ albumId, songId, height = 175 }: AppleMusicEmbedProps) {
  const songParam = songId ? `?i=${songId}` : '';
  
  return (
    <div className={styles.appleMusicEmbed}>
      <iframe 
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
        frameBorder="0" 
        height={height} 
        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
        src={`https://embed.music.apple.com/us/album/${albumId}${songParam}&theme=dark`}
        title="Apple Music Embed"
      ></iframe>
    </div>
  );
}