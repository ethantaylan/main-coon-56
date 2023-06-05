import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cats as CatsInterface } from '../components/index';
import { supabase } from '../supabase';
import { CatCard } from '../components/cat-card';
import { AddNewCatModal } from '../admin/add-new-cat-modal';
import { PlusIcon } from '../icons/icons';

export const Admin = () => {
  const [cats, setCats] = React.useState<any>([]);
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
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  const deleteCat = async (catId?: number) => {
    await supabase.from('cats').delete().eq('id', catId);
    getCats();
  };

  return (
    <React.Fragment>
      <button className="px-2 bg-slate-500" onClick={() => setIsModal(true)}>
        Add new cat
      </button>
      <AddNewCatModal
        onClose={() => setIsModal(false)}
        isModal={isModal}
        onClick={() => {
          setIsModal(false);
          getCats();
        }}
      />
      <NavLink to="/">Home</NavLink>
      <div className="flex flex-wrap">
        {cats.map((cat: CatsInterface, index: number) => (
          <CatCard
            key={index}
            name={cat.name}
            race={cat.race}
            description={cat.description}
            onmMoreInfo={() => null}
            image={cat.image}
            isUserAdmin={isAdmin}
            onCatDelete={() => deleteCat(cat.id)}
          />
        ))}
        <div
          onClick={() => setIsModal(true)}
          className="h-full border hover:scale-105 rounded cursor-pointer items-center m-5 flex flex-col justify-center"
          style={{ width: 320, height: 400 }}
        >
          <span> Ajouter un nouveau chat</span>
          {PlusIcon('h-16 w-16 mt-5')}
        </div>
      </div>
    </React.Fragment>
  );
};
