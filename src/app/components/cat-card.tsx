import React from 'react';
import { Cats } from '.';

interface CatCardProps extends Cats {
  onCatDelete?: () => void;
  onClick?: () => void
}

export const CatCard: React.FC<CatCardProps> = ({
  name,
  race,
  description,
  onmMoreInfo,
  image,
  isUserAdmin,
  onCatDelete,
}) => {
  return (
    <div
      style={{ width: 320, height: 'auto' }}
      className="rounded-xl m-5 bg-opacity-20 w-full p-5 flex shadow-slate-300 shadow-2xl"
    >
      <div className="flex w-full flex-col">
        <img
          style={{height: 200}}
          className="rounded-md border mb-1 w-full object-cover"
          src={image}
          alt="cat card"
        />
        <div className="h-auto text-center flex flex-col">
          <p className="font-bold text-2xl mt-3">{name}</p>
          <p className="text-neutral-400 font-semibold">{race}</p>
          <p className="text-neutral-400 font-normal mt-5">{description} </p>
          <button
            onClick={onmMoreInfo}
            className="text-cyan-400 hover:text-cyan-500 transition-all mt-4"
          >
            Plus d'infos
          </button>
          {isUserAdmin && (
            <button
              onClick={onCatDelete}
              className="text-white bg-red-500 rounded mt-4"
            >
              Supprimer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
