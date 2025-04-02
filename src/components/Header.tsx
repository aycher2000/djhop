'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navList = document.querySelector(`.${styles.navList}`);
      const mobileMenuBtn = document.querySelector(`.${styles.mobileMenuBtn}`);
      
      if (
        isMenuOpen && 
        navList && 
        mobileMenuBtn && 
        !navList.contains(event.target as Node) && 
        !mobileMenuBtn.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, styles.navList, styles.mobileMenuBtn]);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={`${styles.navList} ${isMenuOpen ? styles.active : ''}`}>
            <li>
              <Link 
                href="/" 
                onClick={closeMenu}
                className={pathname === '/' ? styles.activeLink : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/portfolio" 
                onClick={closeMenu}
                className={pathname === '/portfolio' ? styles.activeLink : ''}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className={pathname === '/about' ? styles.activeLink : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/interviews" 
                onClick={closeMenu}
                className={pathname === '/interviews' ? styles.activeLink : ''}
              >
                Interviews
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className={pathname === '/contact' ? styles.activeLink : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
            <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}