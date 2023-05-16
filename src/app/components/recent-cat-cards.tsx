import axios from 'axios';
import React from 'react';
export interface CatCardProps {
  name: string;
}

export const CatCard: React.FC<CatCardProps> = ({ name }) => {
  const [data, setData] = React.useState<any>();
  const getCats = async () => {
    const response = await axios.get('https://cataas.com/api/cats?tags=cute', {
      method: 'GET',
    });
    setData(response);
  };

  console.log(data);

  React.useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="h-48 w-56 rounded-xl bg-white shadow-gray-300 shadow-2xl">
      RecentCatCards
    </div>
  );
};
