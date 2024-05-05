import Footer from '@/components/shared/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { addToFavorites, getFavorites, removeFromFavorites } from '@/lib/utils';
import { addFavorite } from '@/redux/slice/favoriteSlice';
import { addSpell } from '@/redux/slice/spellSlice';
import type { spellType } from '@/types';
import { Bookmark } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    <>
      <main className='max-w-3xl mx-auto mb-5 min-h-[75vh] px-3'>
        <div className='flex items-center justify-between my-5'>
          <h1 className='text-3xl text-gradient font-semibold flex'>
            {spell.name}
          </h1>
          <Button
            variant={'ghost'}
            onClick={() => {
              isFavorite(spell)
                ? removeFromFavorites(spell.index)
                : addToFavorites(spell);
              const favorites = getFavorites();
              dispatch(addFavorite(favorites));
            }}
          >
            {!isFavorite(spell) ? <Bookmark /> : <Bookmark fill='black' />}
          </Button>
        </div>
        <p className='text-justify'>{spell.desc}</p>
        <Card className='flex flex-col items-center mt-5 p-2'>
          <h2 className='text-2xl text-gradient font-semibold mb-1'>
            Higher Level
          </h2>
          <p className='text-justify'>
            {spell.higher_level ? spell.higher_level : 'Nothing Here'}
          </p>
        </Card>
        <Card className='flex flex-col items-center mt-5 p-2'>
          <h2 className='text-2xl text-gradient font-semibold mb-1'>Range</h2>
          <p className='text-justify'>{spell.range}</p>
        </Card>
        <Card className='flex flex-col items-center mt-5 p-2'>
          <h2 className='text-2xl text-gradient font-semibold mb-1'>
            Material
          </h2>
          <p className='text-justify'>{spell.material || 'Nothing Here'}</p>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Spell;
