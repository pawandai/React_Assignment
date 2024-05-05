import { useState, useEffect } from 'react';
import { Trash } from 'lucide-react';
import { getFavorites, removeFromFavorites } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/shared/Footer';
import type { spellType } from '@/types';

const Favorites = () => {
  const [favorites, setFavorites] = useState<spellType[]>([]);

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
      <main className='min-h-[75vh] my-5 p-5 max-w-6xl mx-auto'>
        <div className='flex'>
          <h1 className='mb-5 text-gradient text-4xl py-1'>My Favorites</h1>{' '}
          <span />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-wrap'>
          {favorites.map((favorite) => (
            <Card key={favorite.index}>
              <CardHeader className='flex flex-row gap-5 items-center justify-between'>
                <Link
                  to={`/spells/${favorite.index}`}
                  className='text-gradient'
                >
                  {favorite.name}
                </Link>
                <Button
                  variant={'outline'}
                  onClick={() => handleRemoveFromFavorites(favorite.index)}
                >
                  <Trash color='red' />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Favorites;
