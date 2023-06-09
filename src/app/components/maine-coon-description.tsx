import React from 'react';
import MaineCoonDescriptionImg from '../assets/hero.png';

export const MaineCoonDescription: React.FC = () => {
  return (
    <div className="p-20 mt-28 bg-slate-100 w-full h-full flex">
      <div className="w-full p-20 flex justify-center flex-col h-full">
        <h1 className="text-slate-400 mb-3">
          Courte présentation de la race des Maines Coons
        </h1>
        <h1 className="text-5xl font-bold">
          Le monde majestueux des Maine Coons{' '}
        </h1>
        <div className="flex flex-col">
          <p className="mt-5 font-normal">
            Les <span className="font-semibold">Maine Coons</span> sont souvent
            appelés les "gentils géants" du monde félin en raison de leur taille
            impressionnante et de leur nature aimante. Originaires de l'État du
            Maine aux États-Unis, ils sont connus pour leur allure sauvage et
            leur pelage spectaculaire. Ces chats à la silhouette puissante
            peuvent atteindre jusqu'à 10 kilogrammes pour les mâles et sont
            considérés comme l'une
            <span className="font-semibold">
              {' '}
              des plus grandes races domestiques au monde.
            </span>{' '}
            <br />
            <br />
            Leur pelage dense et soyeux est une véritable œuvre d'art naturelle.
            Disponibles dans une variété de couleurs et de motifs, allant du
            classique "brown tabby" aux variations plus exotiques telles que le
            "silver tortie", les Maine Coons sont de véritables{' '}
            <span className="font-semibold">bijoux de la nature</span>. <br />
            <br />
            Si vous recherchez un chat qui combine élégance, gentillesse et
            intelligence, alors les Maine Coons sont faits pour vous. Ces
            merveilleuses créatures félines vous apporteront{' '}
            <span className="font-semibold">amour, joie </span> et une{' '}
            <span className="font-semibold">présence constante</span> dans votre
            vie.
          </p>
        </div>
        <button className="text-left text-slate-400 hover:text-slate-600 font-normal mt-5">
          En savoir plus
        </button>
      </div>

      <div className="w-full flex items-center justify-center h-full ">
        <img
          className="object-cover p-10 object-top h-full"
          src={MaineCoonDescriptionImg}
          alt="main coon description"
        />
      </div>
    </div>
  );
};
