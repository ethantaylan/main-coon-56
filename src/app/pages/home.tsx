import Navbar from '../components/navbar/navbar';
import HeroImg from '../assets/wall.jpg';

export const Home = () => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="w-full h-full flex justify-between">
        {/* <div className="w-full bg-slate-100 flex justify-center align-middle"><span>Hello</span></div> */}
        <div
          style={{
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
          className="w-full"
        ></div>
      </div>
    </div>
  );
};
