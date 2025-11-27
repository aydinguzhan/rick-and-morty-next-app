"use client";
import CharacterCard from "./CharacterCard";
import { Character } from "@/utils/types";
import { useRouter } from "next/navigation";

type Props = {
  charactersProp: Character[];
};

export default function CharacterList({ charactersProp = [] }: Props) {
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {charactersProp.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            goToPage={(id: number) => router.push(`detail/${id}`)}
          />
        ))}
      </div>
    </div>
  );
}
