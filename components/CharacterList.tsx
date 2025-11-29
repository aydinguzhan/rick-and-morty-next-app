"use client";
import CharacterCard from "./CharacterCard";
import { Character, Info } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useFavoriteStore } from "@/utils/store/favoriteStore";
import { Services } from "@/utils/Utils";
import FilterBar from "./FilterBar";
import { useEffect, useState } from "react";
import { useI18n } from "@/app/providers/I18nProvider";
import Pagination from "./Pagination";
import CharacterCardSkeleton from "./CharacterCardSkeleton";

type Props = {
  charactersProp: Character[];
  page: number;
  pageInfoProp: Info;
};

export default function CharacterList({
  charactersProp = [],
  page,
  pageInfoProp,
}: Props) {
  const [characters, setCharacters] = useState<Character[]>(charactersProp);
  const [currentPage, setCurrentPage] = useState(page);
  const [pageInfo, setPageInfo] = useState<Info>(pageInfoProp);
  useEffect(() => {
    setCharacters(charactersProp);
    setCurrentPage(page);
  }, [charactersProp, page]);
  const [pageFilterValue, setFilterValue] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { t } = useI18n();
  const service = new Services();
  const addFavorite = useFavoriteStore((s) => s.addFavorite);

  const addFav = (data: Character) => addFavorite(data);

  const onFilter = async (filters: {
    name: string;
    status: string;
    species: string;
  }) => {
    setFilterValue(filters);
    setIsLoading(true);
    const responseCharacter = await service.getCharacterFilter(filters);
    setCharacters(responseCharacter.results);
    setPageInfo(responseCharacter.info as Info);
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <FilterBar onFilter={onFilter} />

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <CharacterCardSkeleton key={idx} />
          ))}
        </div>
      )}

      {!isLoading && characters.length > 0 && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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
            currentPage={currentPage}
            totalPages={pageInfo.pages}
            filters={pageFilterValue}
            isClient
          />
        </div>
      )}

      {!isLoading && characters.length === 0 && (
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
