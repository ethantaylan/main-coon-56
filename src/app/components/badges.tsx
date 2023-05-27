import { RxPencil2 } from 'react-icons/rx';
import { TbVaccine } from 'react-icons/tb';
import { ImPriceTags } from 'react-icons/im';

export const Badges: React.FC = () => {
  return (
    <div className="mt-28 flex w-full justify-around items-center">
      <div className="flex  text-neutral-700 items-center flex-col">
        <RxPencil2
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center p-2"
          size={44}
        />
        <p className="mt-5">Démarche rapide</p>
      </div>
      <div className="flex items-center  text-neutral-700 flex-col">
        <TbVaccine
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 items-center p-2"
          size={44}
        />
        <p className="mt-4">Vaccinés, pucés</p>
      </div>
      <div className="flex text-neutral-700 items-center flex-col">
        <ImPriceTags
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center p-2"
          size={44}
        />
        <p className="mt-4">Prix attractifs</p>
      </div>
    </div>
  );
};
