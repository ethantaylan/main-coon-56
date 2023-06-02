import React from 'react';
import { supabase } from '../supabase';
import { CatCard } from './cats-cards';
import { Cats as CatsInterface } from './index';

export const Cats = () => {
  const [cats, setCats] = React.useState<CatsInterface[]>([]);
  const [selectedCat, setSelectedCat] = React.useState<string>('')

  React.useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    const { data } = await supabase.from('cats').select('*');
    if (data) {
      const mappedCats: CatsInterface[] = data.map((cat: any) => ({
        name: cat.name,
        image: cat.image,
        description: cat.description,
        race: cat.race,
        id: cat.id
      }));

      setCats(mappedCats);
    } else {
      setCats([]);
    }
  };

  console.log(selectedCat)

  // const deleteCat = async () => {
  //   const { data } = supabase.from('cats').delete().eq('name',);
  // };

  return (
    <div className="flex items-center w-full justify-around">
      {cats.map((cat: CatsInterface, index: number) => (
        <CatCard
          key={index}
          name={cat.name}
          race={cat.race}
          description={cat.description}
          onmMoreInfo={() => console.log('test')}
          image={cat.image}
          onCatDelete={() => setSelectedCat(cat.name)}
        />
      ))}
    </div>
  );
};
