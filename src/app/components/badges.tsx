import { BsSpeedometer } from 'react-icons/bs';

export const Badges = () => {
  return (
    <div className="mt-20 flex w-full justify-around items-center">
      <div className="w-24 h-24 flex justify-center items-center rounded-full bg-neutral-200">
        <BsSpeedometer size={44} />
      </div>
      <div className="w-24 h-24 flex justify-center items-center rounded-full bg-neutral-200">
        <BsSpeedometer size={44} />
      </div>
      <div className="w-24 h-24 flex justify-center items-center rounded-full bg-neutral-200">
        <BsSpeedometer size={44} />
      </div>
    </div>
  );
};
