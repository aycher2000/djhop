import Image from 'next/image';
import styles from './Interview.module.css';

export default function Interview() {
  return (
    <div className={styles.interviewCard}>
      <Image 
        src="/images/interview-thumbnail.jpg" 
        alt="Interview Thumbnail" 
        className={styles.interviewThumbnail}
        width={800}
        height={400}
      />
      <h2 className={styles.interviewTitle}>Artist Q&A: The Mind Behind the Music & Art</h2>
      
      <div className={styles.interviewContent}>
        <div className={styles.interviewItem}>
          <p className={styles.question}>How did you get into turntablism?</p>
          <p className={styles.answer}>
            My beginning sounds like many other DJs from my generation. I was 11 years old when I saw Herbie Hancock perform "Rockit" with Grandmixer DST live on television, and I was hooked. Three years later, I had one crappy turntable and a tape deck. I was so into scratching that when I first heard "La Di Da Di" by Slick Rick, I didn't like it—because there was no scratching! Haha.
          </p>
        </div>
        
        <div className={styles.interviewItem}>
          <p className={styles.question}>What inspires your artwork?</p>
          <p className={styles.answer}>
            I'm inspired by the competitive nature of hip-hop culture. Whether it's DJing, production, or visual art, you have to stay sharp and keep pushing your craft forward—because in hip-hop, if you're not evolving, you're getting left behind.
          </p>
        </div>
        
        <div className={styles.interviewItem}>
          <p className={styles.question}>What can people expect from this site?</p>
          <p className={styles.answer}>
            This is a showcase of my work—beats, songs, and artwork. A place to explore what I create, whether it's music production, mixtapes, scratching, or visual art.
          </p>
        </div>

        <div className={styles.interviewItem}>
          <p className={styles.question}>Who are some of your biggest influences?</p>
          <p className={styles.answer}>
            From a turntablist perspective: Cash Money, Jazzy Jeff, DJ Quest, Daddy Rich, DJ Aladdin, Joe Cooley, Magic Mike, Mr. Mixx (2 Live Crew), and Mix Master Mike shaped how I see scratching as an art form.
            Later, I drew influence from turntablists I became friends with and practiced with along the way—DJ Syko, Illogic, Dj Demon, Cutting Edge. When I moved to the Bay Area, it was Teeko, Max Kane, Flare, D-Styles, and of course, I gotta give it up to Qbert for having the best practice space imaginable. 
          </p>
          <p className={styles.note}>
            Don't get mad at me if I didn't mention you. It's not easy to remember every single person you came up with on the spot. Especially when you fried as many brain cells as I did 😎.
          </p>
          <p className={styles.answer}>
            Artistically, I draw inspiration from graffiti culture, 90s hip-hop aesthetics, and abstract expressionism.
          </p>
        </div>

        <div className={styles.interviewItem}>
          <p className={styles.question}>Do you have a favorite project you've worked on?</p>
          <p className={styles.answer}>
            It's hard to choose just one. If I had to pick, it would be the record I put out solo in 2004: "40 oz Breaks". It was a DJ tool vinyl with beats and skipless samples to scratch with. I had a hand in the entire process—from concept to pressing the vinyl—and nothing feels more official than holding a record you made in your hands.
            Honorable mentions: I was part of a hip-hop group out of San Diego called Icons. We pushed as far as we could, but timing and location weren't in our favor. The internet wasn't what it is today, and being in San Diego meant living in the entertainment shadow of Los Angeles. Anyone who makes it out of my city eventually moves to LA.
          </p>
        </div>

        <div className={styles.interviewItem}>
          <p className={styles.question}>What's your creative process like?</p>
          <p className={styles.answer}>
            It depends on the project. I can freestyle a lot of my work, but when doing a scratch hook for someone's record, I dig into my mental library. Sometimes the artist gives me a concept, and I run with it. Other times, I create my part first, then have the rapper write to the concept I put together.
            If I'm making music, I start with a bass groove or a drum break and build from there. If I'm working on artwork, I begin with a rough sketch or digital concept. Creativity is all about feeling the moment.
          </p>
        </div>

        <div className={styles.interviewItem}>
          <p className={styles.question}>Do you prefer working alone or collaborating?</p>
          <p className={styles.answer}>
            I love collaborating when the chemistry is right. Some of my best work comes from bouncing ideas off other creatives. But at the same time, there's something powerful about working solo and having full creative control.
          </p>
        </div>

        <div className={styles.interviewItem}>
          <p className={styles.question}>What's next for you?</p>
          <p className={styles.answer}>
            I'm clean and sober now, and it feels like a new beginning—I have my full mental capabilities back. I'm reconnecting with people I came up with in the extended crew. I've been lucky to surround myself with homies who never stop doing great work.
          </p>
          <p className={styles.answer}>
            One of them is <span className={styles.highlight}>Archie Dean</span>, who just finished a project with Boldy James from the Griselda camp. Archie is my fam, and we're in the idea-sparking phase. When we decide to drop, it's gonna be a <span className={styles.highlight}>hate generator</span>—ha!
          </p>
        </div>
      </div>
    </div>
  );
}