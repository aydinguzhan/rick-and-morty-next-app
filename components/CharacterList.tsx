"use client";

import CharacterCard from "./CharacterCard";

type CharacterListProps = {
  characters: any[];
};

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}
