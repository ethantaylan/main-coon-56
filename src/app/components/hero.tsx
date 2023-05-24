import BannerImg from '../assets/hero3.jpg';

export const Hero: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={{ height: 450 }} className="w-full mt-20 items-center flex">
      <div className="w-full p-5 flex-col bg-neutral-100 flex items-center justify-center h-full">
          
        <p className='text-4xl px-10 text-center text-neutral-800 font-semibold'>Succombez au charme de nos adorables Maine Coon </p>
        <button className="hover:scale-105 rounded-md transition font-semibold text-xl mt-10 bg-cyan-400 text-white py-1 px-4">
          Découvrir tous nos chatons
        </button>
      </div>
      <div style={bannerStyle} className="flex w-full h-full flex-col"></div>
    </div>
  );
};
