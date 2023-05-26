import React, { useState } from 'react';
import { Modal } from '../components/modal';

interface AddNewCatModalProps {
  onClose: () => void;
  isModal: boolean;
}

export const AddNewCatModal: React.FC<AddNewCatModalProps> = ({
  onClose,
  isModal,
}) => {
  const [cat, setCat] = useState({
    name: '',
    race: '',
    description: '',
    image: '',
  });

  const handleCatInformations = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCat((cat) => ({
      ...cat,
      [name]: value,
    }));
  };

  console.log(cat.description);

  return (
    <Modal isOpen={isModal} onClose={onClose}>
      <form className="p-5 flex flex-col">
        {/* CAT NAME */}
        <label className="text-slate-500" htmlFor="name">
          Nom du chat
        </label>
        <input
          onChange={handleCatInformations}
          name="name"
          value={cat.name}
          className="mb-4 border p-2 rounded"
          type="text"
        />

        {/* CAT RACE */}
        <label className="text-slate-500" htmlFor="race">
          Race
        </label>
        <input
          onChange={handleCatInformations}
          name="race"
          value={cat.race}
          className="mb-4 border p-2 rounded"
          type="text"
        />

        {/* CAT DESCRIPTION */}
        <label className="text-slate-500" htmlFor="description">
          Description
        </label>
        <input
          onChange={handleCatInformations}
          name="description"
          value={cat.description}
          className="mb-4 border p-2 rounded"
          type="text"
        />

        {/* CAT IMAGE */}
        <label className="text-slate-500" htmlFor="">
          Photo du chat
        </label>
        <input className="" type="file" alt="input-image" />

        <button className="my-3 p-2 px-4 bg-cyan-400 rounded text-white">
          Ajoutez un chat
        </button>
      </form>
    </Modal>
  );
};
