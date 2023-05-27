import { Badges } from '../components/badges';
import { Hero } from '../components/hero';
import { MaineCoonDescription } from '../components/maine-coon-description';
import { Navbar } from '../components/nav/navbar';
import { Cats } from '../components/cats';

export const Home = () => {
  return (
    <div className="font-sans font-semibold bg-white w-full justify-center flex flex-col items-center">
      <Navbar />
      <Hero />
      <Badges />
      <MaineCoonDescription />
      <Cats />
    </div>
  );
};
