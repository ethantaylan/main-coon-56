import { Badges } from '../components/badges';
import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { RecentCats } from '../components/recent-cats';

export const Home = () => {
  return (
    <div className="pt-10 font-sans font-semibold container mx-auto bg-white w-full justify-center flex flex-col items-center">
      <Navbar />
      <Hero />
        <Badges />
      <RecentCats />
    </div>
  );
};
