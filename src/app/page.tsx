import Hero from '@/components/Hero';
import FeaturedTracks from '@/components/FeaturedTracks';
import TrackInfo from '@/components/TrackInfo';
import NewsSection from '@/components/NewsSection';
import Story from '@/components/Story';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedTracks />
      <TrackInfo />
      <NewsSection />
      <Story />
    </>
  );
}