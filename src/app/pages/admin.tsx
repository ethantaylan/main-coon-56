import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cats } from '../components/cats';
import { supabase } from '../supabase';
import { CatCard } from '../components/cats-cards';
import { Modal } from '../components/modal';

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
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        <form className="p-5 flex flex-col">
          {/* CAT NAME  */}
          <label className="text-slate-500" htmlFor="name">
            Nom du chat
          </label>
          <input className="mb-4 border p-2 rounded" type="text" />

          {/* CAT RACE */}
          <label className="text-slate-500" htmlFor="race">
            Race
          </label>
          <input className="mb-4 border p-2 rounded" type="text" />

          <label className="text-slate-500" htmlFor="description">
            Description
          </label>
          <input className="mb-4 border p-2 rounded" type="text" />
          {/* CAT IMAGE  */}

          <label className="text-slate-500"  htmlFor="">Photo du chat</label>
          <input className='' type="file" alt="input-image" />

          <button className='my-3 p-2 px-4 bg-cyan-400 rounded text-white'>Ajoutez un chat</button>
        </form>
      </Modal>
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
