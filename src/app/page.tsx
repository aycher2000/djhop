import styles from './page.module.css';
import Image from 'next/image';
import BandcampTrack from '@/components/BandcampTrack';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/solo.JPG" 
                alt="DJ H.O.P Solo" 
                width={300}
                height={300}
                className={styles.heroImage}
                priority
              />
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.title}>DJ H.O.P</h1>
              <p className={styles.subtitle}>Turntablist | Producer | Artist</p>
              <a href="/portfolio" className={styles.btn}>View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tracks Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Tracks</h2>
          <div className={styles.tracksGrid}>
            <div className={styles.trackCard}>
              <BandcampTrack 
                albumId="3673844050"
                trackId="16049382"
                title="STFUYMCA by Bossasaurus"
              />
            </div>
            <div className={styles.trackCard}>
              <BandcampTrack 
                albumId="3673844050"
                trackId="3646414286"
                title="STFUYMCA by Bossasaurus"
              />
            </div>
            <div className={styles.trackCard}>
              <BandcampTrack 
                albumId="3673844050"
                trackId="3646414286"
                title="STFUYMCA by Bossasaurus"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About These Tracks</h2>
          <div className={styles.content}>
            <h3 className={styles.legendTitle}>🌎 Legend Has It...</h3>
            <p>
              In the ancient lands of Oakland, two mystical beatmakers—Egon Brainparts and 
              NegaTron—sought out a warrior to complete their sonic prophecy. Legends spoke 
              of a turntablist so skilled, so precise, that his scratches could bend time itself.
            </p>
            <p>They called him DJ H.O.P.</p>
            <p>
              For 45 days and 45 nights, they toiled in secret, crafting an album so raw, so 
              untamed, that the world was not ready. Fueled only by tacos and 40 oz elixirs, they 
              forged what would become STFUYMCA—a mixtape whispered about in dark 
              alleyways and vinyl sanctuaries.
            </p>
            <div className={styles.legendDetails}>
              <p>The scratches? Untouchable.</p>
              <p>The beats? A force of nature.</p>
              <p>The legend? Still growing.</p>
            </div>
            <p className={styles.playNote}>🎧 Press play... and witness history.</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Latest News</h2>
          <div className={styles.newsGrid}>
            <article className={styles.newsItem}>
              <h3>Golden Age Hip Hop Mixtape</h3>
              <p className={styles.newsDate}>Coming Summer 2025</p>
              <p className={styles.newsContent}>
                DJ H.O.P is releasing a golden age hip hop mixtape. Remixes, original beats, and completely 
                shredded by the man that brought you the "Hydrophonic Scratch" and the "Lighthouse"...
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>My Story</h2>
          <div className={styles.storyContent}>
            <p>
              I came up in the raw side of San Diego—no roadmap, just a stereo system and a dream. 
              That dream lit up when I saw Grandmixer DXT cut vinyl like an instrument. I was 11, 
              and the sound never left.
            </p>
            
            <p>
              With no gear and no guidance, I built my first setup from scraps. Every scratch was 
              learned the hard way—no tutorials, just obsession. Eventually, two Technics 1200s 
              changed everything.
            </p>
            
            <p>
              Along the way, I found my people—Illogic, Syko, the ICONS crew—iron sharpening iron. 
              We traded tapes, pushed limits, and earned names the old way: through skill.
            </p>
            
            <p>
              Radio opened doors. From garage studios to KCR college radio to connections with 
              The Wake Up Show crew, I saw how far a mixtape and hustle could take you. In the Bay, 
              that evolution hit a new level—linking with legends like Q-Bert, D-Styles, Teeko, and more.
            </p>
            
            <p>
              Then Hawaii called. What started as a move became a reset. The energy, the pace, 
              the peace—it changed how I create. My style deepened. My focus sharpened.
            </p>
            
            <p>
              Now? I'm still that kid chasing a sound, but with decades behind the decks and beats. 
              I never sold out. Never lost the soul. I create because I have to—and I pass it on 
              because that's what culture demands.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}