import { BsSpeedometer } from 'react-icons/bs';

export const Badges: React.FC = () => {
  return (
    <div className="mt-20 flex w-full justify-around items-center">
      <div className="flex items-center flex-col">
        <BsSpeedometer
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center rounded-full shadow-xl shadow-slate-200 p-6"
          size={44}
        />
        <p className="mt-5">Our cats are pretty awesome</p>
      </div>{' '}
      <div className="flex items-center flex-col">
        <BsSpeedometer
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center rounded-full shadow-xl shadow-slate-200 p-6"
          size={44}
        />
        <p className="mt-4">Our cats are pretty awesome</p>
      </div>{' '}
      <div className="flex items-center flex-col">
        <BsSpeedometer
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center rounded-full shadow-xl shadow-slate-200 p-6"
          size={44}
        />
        <p className="mt-4">Our cats are pretty awesome</p>
      </div>
      <div className="flex items-center flex-col">
        <BsSpeedometer
          className="w-24 h-24 flex flex-col justify-center border-neutral-100 text-neutral-700 items-center rounded-full shadow-xl shadow-slate-200 p-6"
          size={44}
        />
        <p className="mt-4">Our cats are pretty awesome</p>
      </div>
    </div>
  );
};
