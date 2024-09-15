import { Metadata } from 'next';
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Rank from './components/Rank';

export const metadata: Metadata = {
  title: 'home',
};

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel />
      <Rank />
    </>
  );
}
