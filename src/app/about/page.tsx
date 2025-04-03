import styles from './page.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>My Story</h1>
        <h2 className={styles.pageSubtitle}>About Me: The Journey of a Turntablist</h2>
        
        <div className={styles.profileImageContainer}>
          <Image 
            src="/images/zman.JPG" 
            alt="DJ H.O.P." 
            width={500} 
            height={500}
            className={styles.profileImage}
            priority
          />
        </div>
        
        <div className={styles.aboutContent}>
          <section className={styles.bioIntro}>
            <p>I grew up in San Diego—not the postcard version with waves and palm trees, but the kind of environment where you either found your lane or got swallowed up. I didn't have a clear path, but that changed the day I saw Herbie Hancock perform "Rockit" on TV with Grandmixer DXT. I was 11. Watching DXT cut and transform vinyl like it was an instrument—it hit me different. That sound didn't leave. It planted something.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Early Days</h3>
            <p>I didn't have gear. What I had was my grandfather's old stereo system—and he wasn't thrilled when it became my personal scratch lab. I'd hit record on a tape deck, loop what I could, and scratch on whatever turntable I could get my hands on—mostly junk.</p>
            <p className={styles.highlight}>Raw. Loud. Real practice.</p>
            <p>Eventually, I scraped together enough for a busted mixer from Radio Shack and started building a setup from the ground up. No mentors. No tutorials. Just hunger and repetition until it started to sound like something.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>First Real Setup</h3>
            <p>1991 marked a pivotal moment in my development when I scored two Technics 1200s for just $300 from a mobile DJ company transitioning to CDs. Their loss was my gain. Paired with a Gemini PMX2200 mixer, that setup catapulted my skills to levels I couldn't reach before.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Finding My Day Ones</h3>
            <p>No one makes it alone. I met two real ones—DJ Illogic and DJ Syko—who sharpened me like steel.</p>
            <p>Illogic schooled me on East Coast techniques. Syko brought that raw West Coast flavor. His room was chaos, but in that mess, we created. We traded samples, built mix tapes, and pushed each other past limits we didn't even know were there.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>The ICONS Chapter</h3>
            <p>Through Syko, I linked up with ICONS, a respected San Diego crew with two lyrical monsters—Frosty and Etch-U-Sketch. These weren't gimmick rappers. They were technicians. Back then, before likes and algorithms, you earned your name off skill and consistency. That crew kept me sharp. They expected the best, and I gave it.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Airwaves & Access</h3>
            <p>Things started to move when I connected with DJ Demon, a working DJ who let me into his garage studio. That space became a crucible—where tracks got built and bonds were forged. But it was Mike Naughty, an SDSU student with an internship at 92.3 The Beat, who put me on air.</p>
            <p>At KCR college radio, I became one of four DJs on Distorted Frequencies. That show became a launchpad. It connected me to DJ Cutting Edge out of L.A.—a technical beast with no ego—and through him, I got introduced to the people behind The Wake Up Show with Sway and King Tech. For a kid who came up solo with a tape deck and a dream, that was heavy.</p>
            <p>Around this time, I also started collaborating with Mike Czech—who'd go on to host the syndicated Scratch and Sniff show. Together, we dropped two mixtapes that traveled further than we did. No big promo. Just good work, moving hand to hand.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Bay Area Shift</h3>
            <p>Eventually, I made a move that changed everything—Oakland. The Bay felt different. Real. You could hear someone scratching out of a second-story window on Haight Street and know you were in the right place.</p>
            <p>There, I linked with DJs who challenged my entire approach. Oliver Orzal, an EDM head, taught me about set structure, key blending, and live energy. Then there was Spair, whose cuts were so clean they almost felt lazy—and Teeko, who was evolving from DJ to full-blown producer in real time.</p>
            <p>Through them, I crossed paths with legends like Q-Bert, D-Styles, and DJ Flare. These weren't just names—these dudes command respect in scratch circles worldwide.</p>
            <p>Throughout the Bay, I built connections that shaped my craft—but some relationships stood out for different reasons.</p>
            <p>The Genie is one of them.</p>
            <p>A guitarist from San Francisco with a mind wired for innovation, The Genie carved his own path—paving it with his bare hands, really. While others followed trends, he was onstage layering live remixes from scratch, looping riffs and flipping sounds in real time right in front of your face. He didn't influence my DJing directly, but he pushed the boundaries of what performance could be.</p>
            <p>More than that, he's been a solid friend through the chaos—one of those people you need in the room when things get real. A true creative in every sense, underrated as hell, and one of the sharpest people I know. I couldn't have done some of this journey without him—and that alone means his name belongs here.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Hawaii: A Different Frequency</h3>
            <p>In the 2000s, life pulled me to Hawaii. I didn't go looking for peace, but I found it. The island rhythm slowed everything down. I stopped just listening to music and started listening to myself.</p>
            <p>Hawaii wasn't a vacation—it was a reset. I still rocked shows, but the energy changed. Stripped of distractions and surrounded by raw nature, I tapped into something deeper. My production gained soul. My style got more intentional. The spiritual side of creativity—the part you can't fake—started coming through in my work.</p>
          </section>
          
          <section className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>Where I Am Now</h3>
            <p>Today, I'm still that kid chasing a sound—but with decades of experience under my belt. I've paid dues, taken hits, stayed independent. Never sold out. Never watered it down.</p>
            <p>Hip-hop gave me direction. It took me from bedroom sessions to radio waves, from basements to block parties to backstages. What started as an obsession became a way of life.</p>
            <p>The turntables might rest, but that scratch—that sound I heard at 11—still lives in everything I create.</p>
            <p>The gear changes. The platforms evolve.</p>
            <p>But my commitment to real expression never wavers.</p>
            <div className={styles.finalThoughts}>
              <p>I'm not here for the spotlight. I'm here to create.</p>
              <p>To pass it down.</p>
              <p>And to keep the culture moving forward—one cut at a time.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}