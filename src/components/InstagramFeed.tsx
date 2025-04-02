import Image from 'next/image';
import styles from './InstagramFeed.module.css';

interface InstagramPost {
  id: number;
  imageSrc: string;
  caption: string;
  link: string;
}

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export default function InstagramFeed({ posts }: InstagramFeedProps) {
  return (
    <div className={styles.instagramSection}>
      <h2>Latest Instagram Posts</h2>
      
      {posts.map((post) => (
        <div key={post.id} className={styles.instagramPost}>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <Image 
              src={post.imageSrc} 
              alt={`Instagram Post ${post.id}`} 
              width={150}
              height={150}
              style={{ objectFit: 'cover' }}
            />
          </a>
          <p>{post.caption}</p>
        </div>
      ))}
      
      <a 
        href="https://www.instagram.com/chrishopbarton?igsh=c2MyY3BrZWQwNTlp&utm_source=qr" 
        className={styles.followLink} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Follow me on Instagram
      </a>
    </div>
  );
}