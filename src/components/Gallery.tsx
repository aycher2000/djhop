'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';

interface GalleryItem {
  id: number;
  thumbSrc: string;
  largeSrc: string;
  title: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setCurrentImage(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (!currentImage) return;
    
    const currentIndex = items.findIndex(item => item.id === currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % items.length;
    } else {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }
    
    setCurrentImage(items[newIndex]);
  };

  return (
    <>
      <div className={styles.gallery}>
        {items.map((item) => (
          <div key={item.id} className={styles.galleryItem} onClick={() => openLightbox(item)}>
            <Image 
              src={item.thumbSrc} 
              alt={item.title} 
              width={250}
              height={250}
              style={{ objectFit: 'cover' }}
              quality={90}
            />
            <div className={styles.overlay}>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && currentImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.close} onClick={closeLightbox}>×</button>
          <button className={styles.prev} onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>❮</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src={currentImage.largeSrc} 
              alt={currentImage.title}
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
            />
            <div className={styles.caption}>{currentImage.title}</div>
          </div>
          <button className={styles.next} onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>❯</button>
        </div>
      )}
    </>
  );
}