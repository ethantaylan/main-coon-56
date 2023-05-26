import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cats } from '../components/cats';
import { supabase } from '../supabase';
import { CatCard } from '../components/cats-cards';
import { AddNewCatModal } from '../components/add-new-cat-modal';

export const Admin = () => {
  const [cats, setCats] = React.useState<Cats[]>([]);
  const [isModal, setIsModal] = React.useState<boolean>(false);

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
  React.useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
      <button onClick={() => setIsModal(true)}>Add new cat</button>
      <AddNewCatModal
        onClose={() => setIsModal(false)}
        isModal={isModal}
      />
      <NavLink to="/">Home</NavLink>
      {cats.map((cat) => (
        <CatCard
          name={cat.name}
          race={cat.race}
          description={cat.description}
          onmMoreInfo={function (): void {
            throw new Error('Function not implemented.');
          }}
          img={cat.image}
        />
      ))}
    </div>
  );
};
