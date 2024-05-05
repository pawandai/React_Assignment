import { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';
import { spellType } from '../Spell';
import { getFavorites, removeFromFavorites } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState<spellType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = getFavorites();
    if (favorites) setFavorites(favorites);
  }, []);

  const handleRemoveFromFavorites = (index: string) => {
    removeFromFavorites(index);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((prevFav) => prevFav.index !== index)
    );
  };

  return (
    <>
      <div className='mb-10'>Favorites</div>
      <div>
        {favorites.map((favorite) => (
          <div key={favorite.index}>
            <span
              onClick={() => {
                navigate(`/spells/${favorite.index}`);
              }}
            >
              {favorite.name}
            </span>{' '}
            <Trash onClick={() => handleRemoveFromFavorites(favorite.index)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
