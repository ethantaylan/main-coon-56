import { Hero } from '../components/hero';
import { Navbar } from '../components/navbar';
import { RecentCats } from '../components/recent-cats';

export const Home = () => {
  return (
      <div className="font-sans px-20 w-full flex-colum">
        <div className="pt-10 bg-white w-full justify-center flex flex-col items-center">
          <Navbar />
          <Hero />
        </div>
        <RecentCats />

      </div>
      
  );
};
