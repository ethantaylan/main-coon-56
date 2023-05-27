import React from 'react';
import { Cats } from '.';

export const CatCard: React.FC<Cats> = ({
  name,
  race,
  description,
  onmMoreInfo,
  image,
}) => {
  return (
    <div
      style={{ width: 320 }}
      className="mb-60 rounded-md mt-20 mr-6 bg-opacity-20 backdrop-blur-xl backdrop-brightness-150 w-full p-5 flex bg-white shadow-slate-200 shadow-xl"
    >
      <div className="flex flex-col">
        <img
          className="rounded-md h-48 mb-1 w-full object-cover"
          src={image}
          alt="cat card"
        />
        <div className="h-auto text-center flex- flex-col">
          <p className="font-bold text-2xl mt-3">{name}</p>
          <p className="text-neutral-400 font-semibold">{race}</p>
          <p className="text-neutral-400 font-normal mt-5">{description} </p>
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
