import styles from './NewsItem.module.css';

interface NewsItemProps {
  date: string;
  title: string;
  content: string;
  linkText: string;
  linkUrl: string;
}

export default function NewsItem({ date, title, content, linkText, linkUrl }: NewsItemProps) {
  return (
    <div className={styles.newsItem}>
      <div className={styles.date}>{date}</div>
      <h3 className={styles.glitchText}>{title}</h3>
      <p>{content}</p>
      <a href={linkUrl} className={styles.readMore}>{linkText}</a>
    </div>
  );
}