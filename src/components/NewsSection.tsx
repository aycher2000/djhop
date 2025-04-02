import NewsItem from './NewsItem';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const newsItems = [
    {
      date: 'March 2025',
      title: '⚡ SYSTEM BREACH: Strange Soundwaves Detected',
      content: 'Unauthorized transmissions have been picked up in the underground frequencies. It appears that rare and unreleased DJ H.O.P material has begun surfacing on the dark web. If you see it, proceed with caution—it may contain hidden turntable sorcery.',
      linkText: 'Decrypt the Files',
      linkUrl: '#'
    },
    {
      date: '🛠️ Loading...',
      title: 'Something is Brewing in the Lab...',
      content: "Hushed voices, dim lights, and stacks of wax—rumors are swirling about DJ H.O.P's next move. Could it be a new record, an exclusive mix, or something completely unexpected? Stay tuned. The bass drops when you least expect it.",
      linkText: 'Stay Updated',
      linkUrl: '#'
    }
  ];

  return (
    <section className={styles.latestNews}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Latest News</h2>
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index}
              date={item.date}
              title={item.title}
              content={item.content}
              linkText={item.linkText}
              linkUrl={item.linkUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}