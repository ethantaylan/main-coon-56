import BannerImg from '../assets/hero3.png';

export const Hero: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={{ height: 550 }} className="w-full mt-20 items-center flex">
      <div className="w-full relative flex-col bg-neutral-100 flex justify-center h-full">
        <div className='px-14'>
          <p className="text-7xl text-slate-400 font-bold">Bienvenue </p>
          <p className="text-5xl text-neutral-900 font-bold mt-5">
            Dans le monde merveilleux des Maines Coons
          </p>
          <button className="mt-10 hover:scale-105 rounded-md transition font-semibold text-xl bg-cyan-400 text-white py-1 px-4">
            Découvrir tous nos chatons
          </button>
        </div>
      </div>
      <div style={bannerStyle} className="flex w-full h-full flex-col"></div>
    </div>
  );
};
