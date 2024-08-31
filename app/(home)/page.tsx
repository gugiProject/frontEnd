import Banner from './components/Banner';
import Carousel from './components/Carousel';
import Header from './components/Header';
import samsung from '../../public/Img/team-samsung.png';
import Rank from './components/Rank';

export default function Home() {
  const images = [
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
    samsung,
  ];
  return (
    <>
      <Header />
      <Banner />
      <Carousel images={images} />
      <Rank />
    </>
  );
}
