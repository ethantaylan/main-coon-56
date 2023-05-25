import React from 'react';
import { supabase } from '../supabase';
import { CatCard } from './cats-cards';

export interface Cats {
  name: string;
  image: string;
  description: string;
  race: string;
  price: number;
}

export const Cats = () => {
  const [cats, setCats] = React.useState<Cats[]>([]);

  React.useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    const { data } = await supabase.from('cats').select('*');
    if (data) {
      const mappedCats: Cats[] = data.map((cat: any) => ({
        name: cat.name,
        image: cat.image,
        description: cat.description,
        race: cat.race,
        price: cat.price,
      }));

      setCats(mappedCats);
    } else {
      setCats([]);
    }
  };

  return (
    <div className="flex items-center w-full justify-around">
      {cats.map((cat) => (
        <CatCard
          name={cat.name}
          race={cat.race}
          description={cat.description}
          onmMoreInfo={() => console.log('test')}
          img={cat.image}
        />
      ))}
    </div>
  );
};
