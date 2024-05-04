import type { spellType } from '@/pages/Spell';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addToFavorites = (data: spellType) => {
  let spells: string[] | null = localStorage.getItem('spells') as
    | string[]
    | null;

  if (spells) {
    spells = JSON.parse(spells.toString());
  } else {
    spells = [];
  }

  spells?.push(JSON.stringify(data));

  localStorage.setItem('spells', JSON.stringify(spells));
};

export const removeFromFavorites = (index: number) => {
  let spells: string[] | null = localStorage.getItem('spells') as
    | string[]
    | null;

  if (spells) {
    spells = JSON.parse(spells.toString());
  } else {
    spells = [];
  }

  spells?.splice(index, 1);

  localStorage.setItem('spells', JSON.stringify(spells));
};
