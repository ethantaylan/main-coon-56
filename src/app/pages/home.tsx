import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { RecentCats } from '../components/recent-cats';

export const Home = () => {
  return (
    <div className="font-sans w-full flex justify-center">
      <div className="pt-10 bg-white flex justify-between flex-col items-center max-w-5xl container">
        <Navbar />
        <Hero />
        <RecentCats />
      </div>
    </div>
  );
};
