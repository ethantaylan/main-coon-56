import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cats as CatsInterface } from '../components/index';
import { supabase } from '../supabase';
import { CatCard } from '../components/cats-cards';
import { AddNewCatModal } from '../admin/add-new-cat-modal';

export const Admin = () => {
  const [cats, setCats] = React.useState<CatsInterface[]>([]);
  const [isModal, setIsModal] = React.useState<boolean>(false);
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);

  const getCats = async () => {
    const { data } = await supabase.from('cats').select('*');
    if (data) {
      const mappedCats: CatsInterface[] = data.map((cat: any) => ({
        name: cat.name,
        image: cat.image,
        description: cat.description,
        race: cat.race,
        price: cat.price,
        id: cat.id,
      }));

      setCats(mappedCats);
    } else {
      setCats([]);
    }
  };
  React.useEffect(() => {
    getCats();
  }, []);

  React.useEffect(() => {
    if (window.location.href.includes('admin')) {
      console.log('true');
      setIsAdmin(true);
    } else {
      console.log('false');
      setIsAdmin(false);
    }
  }, []);

  const deleteCat = async (catId?: number) => {
    await supabase.from('cats').delete().eq('id', catId);
    getCats();
  };

  return (
    <div>
      <button onClick={() => setIsModal(true)}>Add new cat</button>
      <AddNewCatModal
        onClose={() => setIsModal(false)}
        isModal={isModal}
        onClick={() => getCats()}
      />
      <NavLink to="/">Home</NavLink>
      <div className="flex">
        {cats.map((cat: CatsInterface, index: number) => (
          <CatCard
            key={index}
            name={cat.name}
            race={cat.race}
            description={cat.description}
            onmMoreInfo={function (): void {
              throw new Error('Function not implemented.');
            }}
            image={cat.image}
            isUserAdmin={isAdmin}
            onCatDelete={() => deleteCat(cat.id)}
          />
        ))}
      </div>
    </div>
  );
};
