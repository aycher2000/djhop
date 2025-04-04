import Interview from '@/components/Interview';
import styles from './page.module.css';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DJ H.O.P - Interviews | Artist Q&A',
  description: 'Read exclusive interviews with DJ H.O.P about his turntablism beginnings, creative process, influences, and future projects.',
  keywords: ['DJ H.O.P interview', 'turntablist Q&A', 'artist interview', 'DJ techniques', 'hip-hop artist', 'music producer insights'],
};

export default function Interviews() {
  return (
    <div className={styles.interviewContainer}>
      {/* JSON-LD structured data for search engines and AI crawlers */}
      <Script id="interview-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How did you get into turntablism?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "My beginning sounds like many other DJs from my generation. I was 11 years old when I saw Herbie Hancock perform \"Rockit\" with Grandmixer DST live on television, and I was hooked. Three years later, I had one crappy turntable and a tape deck. I was so into scratching that when I first heard \"La Di Da Di\" by Slick Rick, I didn't like it—because there was no scratching!"
              }
            },
            {
              "@type": "Question",
              "name": "What inspires your artwork?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "I'm inspired by the competitive nature of hip-hop culture. Whether it's DJing, production, or visual art, you have to stay sharp and keep pushing your craft forward—because in hip-hop, if you're not evolving, you're getting left behind."
              }
            },
            {
              "@type": "Question",
              "name": "Do you have a favorite project you've worked on?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It's hard to choose just one. If I had to pick, it would be the record I put out solo in 2004: \"40 oz Breaks\". It was a DJ tool vinyl with beats and skipless samples to scratch with. I had a hand in the entire process—from concept to pressing the vinyl—and nothing feels more official than holding a record you made in your hands."
              }
            }
          ]
        })
      }} />
      <div className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Interviews</h1>
          <Interview />
        </div>
      </div>
    </div>
  );
}