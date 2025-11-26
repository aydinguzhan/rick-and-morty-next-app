"use client";

import { Helper, Services } from "@/utils/Utils";
import CharacterCard from "./CharacterCard";
import { useEffect, useState } from "react";
import { CharacterResponse, Character } from "@/utils/types";
import Pagination from "./Pagination";

export default function CharacterList() {
  const service = new Services();

  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async (page: number) => {
    setLoading(true);
    try {
      const response: CharacterResponse = await service.getCharacter({
        page: String(page),
      });
      setCharacters(response.results);
      setCurrentPage(response.info.current as number);
      setTotalPages(response.info.pages);
    } catch (err) {
      console.error("Fetch characters failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(1); // initial load
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <p className="text-center">Loading characters...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => fetchCharacters(page)}
      />
    </div>
  );
}
