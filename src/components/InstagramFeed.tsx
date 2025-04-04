"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './InstagramFeed.module.css';

interface InstagramFeedProps {
  // No longer need to pass in posts, as we're using the Elfsight widget
  posts?: any[];
}

export default function InstagramFeed({}: InstagramFeedProps) {
  useEffect(() => {
    // This will trigger Elfsight to reload widgets when the component mounts
    if (typeof window !== 'undefined' && (window as any).eapps) {
      (window as any).eapps.initAll();
    }
  }, []);

  return (
    <div className={styles.instagramSection}>
      <h2>Latest Instagram Posts</h2>
      
      <div className={styles.widgetContainer}>
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="afterInteractive"
        />
        <div 
          className="elfsight-app-750cf217-917b-4c7d-8cf6-cb8d5c6faf2f" 
          data-elfsight-app-lazy
        ></div>
      </div>
      
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