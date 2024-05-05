import { addSpells } from '@/redux/slice/allSpellsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import Footer from '@/components/shared/Footer';
import Pagination from '@/components/shared/Pagination';
import type { spellsType } from '@/types';

const Spells = () => {
  const dispatch = useDispatch();
  const spells = useSelector(
    (state: { spells: { data: spellsType[] } }) => state.spells.data
  );

  useEffect(() => {
    const getAllSpells = async () => {
      try {
        const response = await fetch('https://www.dnd5eapi.co/api/spells');

        if (response.ok) {
          const data = await response.json();
          dispatch(addSpells(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllSpells();
  }, [dispatch]);

  return (
    <>
      <main className='max-w-6xl mx-auto px-4 my-4 min-h-[80vh]'>
        <div className='flex'>
          <h1 className='my-8 text-4xl text-gradient'>Explore the spells</h1>
          <span />
        </div>
        <Pagination data={spells} itemsPerPage={10} />
      </main>
      <Footer />
    </>
  );
};

export default Spells;
