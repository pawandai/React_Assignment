import { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';
import { spellType } from '../Spell';
import { removeFromFavorites } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState<spellType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storateSpells = localStorage.getItem('spells');
    if (storateSpells) {
      const storage: string[] = JSON.parse(storateSpells);
      const parsedFavorites: spellType[] = storage.map((spell) =>
        JSON.parse(spell)
      );
      setFavorites(parsedFavorites);
    }
  }, []);

  const handleRemoveFromFavorites = (index: number) => {
    removeFromFavorites(index);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <div className='mb-10'>Favorites</div>
      <div>
        {favorites.map((favorite, index) => (
          <div key={index}>
            <span
              onClick={() => {
                navigate(`/spells/${favorite.index}`);
              }}
            >
              {favorite.name}
            </span>{' '}
            <Trash onClick={() => handleRemoveFromFavorites(index)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
