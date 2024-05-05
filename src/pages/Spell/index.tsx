import { Button } from '@/components/ui/button';
import { addToFavorites, getFavorites, removeFromFavorites } from '@/lib/utils';
import { addFavorite } from '@/redux/slice/favoriteSlice';
import { addSpell } from '@/redux/slice/spellSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export type spellType = {
  index: string;
  name: string;
  desc: [];
  higher_level: [];
  range: number;
  components: [];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  classes: [];
  subclasses: [];
};

const Spell = () => {
  const spell = useSelector(
    (state: { spell: { data: spellType } }) => state.spell.data
  );
  const favorites = useSelector(
    (state: { favorites: { data: spellType[] } }) => state.favorites.data
  );
  const dispatch = useDispatch();
  console.log(spell);
  const pathname = useParams();

  const isFavorite = (spell: spellType) => {
    for (const favorite of favorites) {
      if (favorite.index === spell.index) return true;
    }
    return false;
  };

  useEffect(() => {
    const getSpell = async (index: string) => {
      try {
        const response = await fetch(
          `https://www.dnd5eapi.co/api/spells/${index}`
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(addSpell(data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSpell(pathname.index!);
  }, [dispatch, pathname.index]);

  return (
    <div>
      {pathname.index} {spell.desc}
      <Button
        onClick={() => {
          isFavorite(spell)
            ? removeFromFavorites(spell.index)
            : addToFavorites(spell);
          const favorites = getFavorites();
          dispatch(addFavorite(favorites));
        }}
      >
        {!isFavorite(spell) ? 'Add to Favorites' : 'Remove from Favorites'}
      </Button>
    </div>
  );
};

export default Spell;
