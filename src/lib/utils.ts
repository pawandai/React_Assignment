import type { spellType } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addToFavorites = (data: spellType) => {
  try {
    const favorites = getFavorites() || [];

    favorites?.push(data);

    localStorage.setItem('spells', JSON.stringify(favorites));

    toast.success('Added to favorites');
  } catch (error) {
    toast.error('Sorry, something went wrong');
  }
};

export const getFavorites = () => {
  const storageSpells = localStorage.getItem('spells');
  if (storageSpells) {
    return JSON.parse(storageSpells);
  }
  return [];
};

export const removeFromFavorites = (index: string) => {
  try {
    const newSpells = getFavorites()?.filter(
      (favorite: spellType) => favorite.index !== index
    );

    localStorage.setItem('spells', JSON.stringify(newSpells));

    toast.success('Removed from favorites');
  } catch (error) {
    toast.error('Sorry, something went wrong');
  }
};
