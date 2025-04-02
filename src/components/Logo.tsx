'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export default function Logo({ size = 50, showText = true }: LogoProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Start the flip animation every 5 seconds
    const flipInterval = setInterval(() => {
      setIsFlipped(true);
      
      // Reset the flip state after animation completes
      setTimeout(() => {
        setIsFlipped(false);
      }, 1000); // Animation duration is 1 second
    }, 5000); // Interval of 5 seconds
    
    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className={styles.logoContainer}>
      <div className={`${styles.logoWrapper} ${isFlipped ? styles.flipped : ''}`}>
        <Image 
          src="/images/logo.webp" 
          alt="Dj H.O.P Logo" 
          width={size} 
          height={size} 
          className={styles.logoImage}
        />
      </div>
      {showText && <h1 className={styles.logoText}>Dj H.O.P</h1>}
    </div>
  );
}