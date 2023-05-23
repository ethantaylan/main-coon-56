import React from 'react';
import { CatCard, CatCardProps } from './recent-cat-cards';
import Cat1 from '../assets/cats/1.jpeg';
import Cat2 from '../assets/cats/2.jpeg';
import Cat3 from '../assets/cats/3.jpeg';

export const Cats: CatCardProps[] = [
  {
    name: 'Joy',
    race: 'Maine Coon',
    description:
      'Description of the Maine Coon cat presented in the image below',

    img: Cat1,
    onmMoreInfo: () => console.log('test'),
  },
  {
    name: 'Caramel',
    race: 'Maine Coon',
    description:
      'Description of the Maine Coon cat presented in the image below',
    img: Cat2,
    onmMoreInfo: () => console.log('test'),
  },
  {
    name: 'Mewto',
    race: 'Maine Coon',
    description:
      'Description of the Maine Coon cat presented in the image below',

    img: Cat3,
    onmMoreInfo: () => console.log('test'),
  },
];

export const RecentCats = () => {
  return (
      <div className="flex items-center w-full justify-around">
        {Cats.map((cat) => (
          <CatCard
            name={cat.name}
            race={cat.race}
            description={cat.description}
            onmMoreInfo={cat.onmMoreInfo}
            img={cat.img}
          />
        ))}
    </div>
  );
};
