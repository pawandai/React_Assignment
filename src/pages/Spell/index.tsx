import { Button } from '@/components/ui/button';
import { addToFavorites } from '@/lib/utils';
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
  const dispatch = useDispatch();
  console.log(spell);
  const pathname = useParams();

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
          addToFavorites(spell);
        }}
      >
        Add to Favorite
      </Button>
    </div>
  );
};

export default Spell;
