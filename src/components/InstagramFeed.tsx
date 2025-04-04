"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import styles from './InstagramFeed.module.css';

export default function InstagramFeed() {
  return (
    <div className={styles.instagramSection}>
      <h2>Latest Instagram Posts</h2>
      
      <div className={styles.widgetContainer}>
        {/* Load Elfsight script in the head to ensure it's available before any component interactions */}
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="beforeInteractive"
        />
        
        {/* The widget container with proper class name */}
        <div className="elfsight-app-750cf217-917b-4c7d-8cf6-cb8d5c6faf2f"></div>
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