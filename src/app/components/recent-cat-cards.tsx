import React from 'react';

export interface CatCardProps {
  name: string;
  race: string;
  description: string;
  onmMoreInfo: () => void;
  img: string;
}

export const CatCard: React.FC<CatCardProps> = ({
  name,
  race,
  description,
  onmMoreInfo,
  img,
}) => {
  return (
    <div
      style={{ width: 320 }}
      className="mb-60 mt-20 mr-6 bg-opacity-20 backdrop-blur-xl backdrop-brightness-150 w-full p-5 flex bg-white shadow-gray-200 shadow-2xl"
    >
      <div className="flex flex-col">
        <img
          className="h-48 mb-1 w-full object-cover"
          src={img}
          alt="cat card"
        />
        <div className="h-auto text-center flex- flex-col">
          <p className="font-bold text-2xl mt-3">{name}</p>
          <p className="text-neutral-400 font-semibold">{race}</p>
          <p className="text-neutral-400 mt-5">{description} </p>
          <button
            onClick={onmMoreInfo}
            className="text-cyan-400 hover:text-cyan-500 transition-all mt-4"
          >
            Plus d'infos
          </button>
        </div>
      </div>
    </div>
  );
};
