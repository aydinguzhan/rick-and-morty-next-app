import { create } from "zustand";
import { Character, FavoriteCharacter } from "@/utils/types";
import { Helper } from "@/utils/Utils";

interface FavoriteStore {
  favorites: FavoriteCharacter[];
  addFavorite: (char: Character) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (char: Character) => void;
  setFavorites: (chars: FavoriteCharacter[]) => void;
}

const helper = new Helper();

export const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],

  setFavorites: (chars) => set({ favorites: chars }),

  addFavorite: (char) =>
    set((state) => {
      if (state.favorites.find((c) => c.id === char.id)) return state;
      helper.setLocalStorage("favorites", char);
      const newFavs = [
        ...state.favorites,
        {
          id: char.id,
          name: char.name,
          image: char.image,
          status: char.status,
          species: char.species,
        },
      ];
      return { favorites: newFavs };
    }),

  removeFavorite: (id) =>
    set((state) => {
      const newFavs = state.favorites.filter((c) => c.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return { favorites: newFavs };
    }),

  toggleFavorite: (char) =>
    set((state) => {
      const exists = state.favorites.find((c) => c.id === char.id);
      const newFavs = exists
        ? state.favorites.filter((c) => c.id !== char.id)
        : [
            ...state.favorites,
            {
              id: char.id,
              name: char.name,
              image: char.image,
              status: char.status,
              species: char.species,
            },
          ];
      helper.setLocalStorage("favorites", char);
      return { favorites: newFavs };
    }),
}));
