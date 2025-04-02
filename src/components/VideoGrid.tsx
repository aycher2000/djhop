import styles from './VideoGrid.module.css';

interface VideoGridProps {
  videoIds: string[];
}

export default function VideoGrid({ videoIds }: VideoGridProps) {
  return (
    <div className={styles.videoGrid}>
      {videoIds.map((videoId, index) => (
        <iframe 
          key={index}
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title={`YouTube video ${index + 1}`}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}