"use client";
import CharacterCard from "./CharacterCard";
import { Character, Info } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useFavoriteStore } from "@/utils/store/favoriteStore";
import { Services } from "@/utils/Utils";
import FilterBar from "./FilterBar";
import { useState } from "react";
import { useI18n } from "@/app/providers/I18nProvider";
import Pagination from "./Pagination";

type Props = {
  charactersProp: Character[];
  page: number;
};

export default function CharacterList({ charactersProp = [], page }: Props) {
  const [characters, setCharacters] = useState<Character[]>(charactersProp);
  const [pageInfo, setPageInfo] = useState<Info>({
    count: 0,
    next: null,
    prev: null,
    current: 1,
    pages: 0,
  });
  const router = useRouter();
  const { t } = useI18n();
  const service = new Services();
  const addFavorite = useFavoriteStore((s) => s.addFavorite);
  const [pageFilterValue, setFilterValue] = useState({});
  const addFav = (data: Character) => {
    addFavorite(data);
  };
  const onFilter = async (filters: {
    name: string;
    status: string;
    species: string;
  }) => {
    setFilterValue(filters);
    const responseCharacter = await service.getCharacterFilter(filters);
    setCharacters(responseCharacter.results);
    setPageInfo(responseCharacter.info as Info);
  };

  return (
    <div className="p-4">
      <FilterBar onFilter={onFilter} />
      {characters.length ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {characters.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                goToPage={(id: number) => router.push(`detail/${id}`)}
                addFav={(data: any) => addFav(data)}
              />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={pageInfo.pages}
            filters={pageFilterValue}
          />
        </div>
      ) : (
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="w-full max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex items-center justify-center h-48">
            <span className="text-gray-800 dark:text-white font-semibold text-2xl text-center">
              {t("data_not_found")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
