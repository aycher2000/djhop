interface BandcampTrackProps {
  albumId: string;
  trackId: string;
  title: string;
}

export default function BandcampTrack({ albumId, trackId, title }: BandcampTrackProps) {
  // For HTML iframes, the fallback content isn't rendered in modern browsers
  // We're just providing the embed without fallback content
  return (
    <iframe
      style={{
        border: 0,
        width: '100%',
        height: '42px',
      }}
      src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=small/bgcol=333333/linkcol=00ffff/artwork=none/track=${trackId}/transparent=true/`}
      seamless
      title={title || "Bandcamp Track"}
      allow="autoplay" 
    />
  );
} 