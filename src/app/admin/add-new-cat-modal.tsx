import React from 'react';
import { Modal } from '../components/modal';
import { supabase } from '../supabase';
import { Cats, Inputs } from '../components';
import { PhotoIcon, PlusIcon } from '../icons/icons';

export interface AddNewCatModalProps {
  onClose: () => void;
  isModal: boolean;
  onClick: () => void;
}

export const AddNewCatModal: React.FC<AddNewCatModalProps> = ({
  onClose,
  isModal,
  onClick,
}) => {
  const [cat, setCat] = React.useState<Cats>({
    name: '',
    race: '',
    description: '',
    image: '',
  });

  const inputs: Inputs[] = [
    { text: 'Nom du chat', name: 'name', value: cat.name, type: 'text' },
    { text: 'Race', name: 'race', value: cat.race, type: 'text' },
    {
      text: 'Description',
      name: 'description',
      value: cat.description,
      type: 'text',
    },
  ];

  const handleCatInformations = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCat((cat: Cats) => ({
      ...cat,
      [name]: value,
    }));
  };

  const addNewCat = async () => {
    if (
      inputFileRef.current &&
      inputFileRef.current.files &&
      inputFileRef.current.files.length > 0
    ) {
      const selectedFile = inputFileRef.current.files[0];

      const { data, error } = await supabase.storage
        .from('cats')
        .upload(selectedFile.name, selectedFile);

      if (data) {
        insertCatData(data.path);
      } else {
        console.error(error);
      }
    } else {
      insertCatData('');
    }
  };

  const insertCatData = async (imagePath: string) => {
    const { data, error } = await supabase.from('cats').insert([
      {
        name: cat.name,
        description: cat.description,
        race: cat.race,
        image: `https://ezmwhubuxpguzrljzbkx.supabase.co/storage/v1/object/public/cats/${imagePath}`,
      },
    ]);
    onClick();
  };

  const uploadButton = document.getElementById('file-upload-button');
  console.log(uploadButton);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  return (
    <Modal isOpen={isModal} onClose={onClose}>
      <form className="p-10 flex flex-col">
        {inputs.map((input: Inputs, index: number) => (
          <div key={index} className="flex mb-3 flex-col">
            <label className="text-slate-500" htmlFor={input.name}>
              {input.text}
            </label>

            <input
              onChange={handleCatInformations}
              name={input.name}
              value={input.value}
              className="mb-4 border p-2 rounded"
              type={input.type}
            />
          </div>
        ))}

        <label className="py-2 rounded" htmlFor="upload-button">
          {' '}
          <span className='text-slate-500'>Ajouter une photo : {PhotoIcon('h-6 w-6')}</span>
        </label>
        <input
          ref={inputFileRef}
          id="upload-button"
          type="file"
          accept="image/*"
          hidden
        />

        <button
          onClick={(event) => {
            addNewCat();
            event.preventDefault();
          }}
          className="mt-10 p-2 px-4 bg-orange-300 rounded text-white"
        >
          Ajouter un chat
        </button>
      </form>
    </Modal>
  );
};
