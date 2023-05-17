import React from 'react';
import HeroImg from '../assets/hero.png';

export const Hero = () => {
  return (
    <div className="w-full h-full items-center flex">
      <div className="w-full mb-60">
        <div className="flex flex-col">
          <span className="text-6xl font-bold">Succombez</span>
          <span className="text-6xl leading-tight">
            au charme de nos adorables chatons
          </span>
          <div>
            <button className="rounded-lg font-semibold text-2xl mt-4 bg-amber-400 text-white py-2 px-5">
              Découvrir tous nos chatons
            </button>
          </div>
        </div>
      </div>
      <div className="w-10/12">
        <img className="ml-28 object-cover w-full" src={HeroImg} alt="cat" />
      </div>
    </div>
  );
};
