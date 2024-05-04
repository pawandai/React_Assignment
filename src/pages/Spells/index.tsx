import { addSpells } from '@/redux/slice/allSpellsSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type spellsType = {
  index: string;
  level: number;
  name: string;
  url: string;
};

const Spells = () => {
  const navigate = useNavigate();
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
    <div>
      {spells.map((spell) => (
        <div key={spell.url}>
          <span
            onClick={() => {
              navigate(`/spells/${spell.index}`);
            }}
          >
            {spell.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Spells;
