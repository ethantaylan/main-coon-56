import BannerImg from '../assets/hero3.jpg';

export const Hero = () => {
  const bannerStyle: React.CSSProperties = {
    backgroundImage: `url(${BannerImg})`,
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <div className="w-full h-full items-center flex">
      <div style={bannerStyle} className="flex flex-col">
        <p className="text-6xl max-w-prose text-center font-bold">
          Succombez au charme de nos adorables chatons
          <button className="rounded-lg font-semibold text-2xl mt-4 bg-amber-400 text-white py-2 px-5">
            Découvrir tous nos chatons
          </button>
        </p>
      </div>
    </div>
  );
};
