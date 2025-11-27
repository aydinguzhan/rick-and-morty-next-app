"use client";

import { Character, SafeCharacter } from "@/utils/types";
import { HeartPlusIcon } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler, ReactEventHandler } from "react";

type Props = {
  character: SafeCharacter;
  goToPage: (id: number) => void;
  addFav: (data: Character) => void;
};

export default function CharacterCard({ character, goToPage, addFav }: Props) {
  const handleFavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addFav(character as Character);
  };
  return (
    <div
      onClick={(e) => {
        goToPage(character?.id as number);
      }}
      className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-95 hover:cursor-pointer transition-transform duration-300 "
    >
      <div className="relative w-full h-64">
        <Image
          src={(character.image as string) ?? "/photos.avif"}
          alt={character.name as string}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 text-white">
        <h3 className="font-bold">{character?.name}</h3>
        <p>
          <strong>Status:</strong> {character?.status}
        </p>
        <p>
          <strong>Species:</strong> {character?.species}
        </p>
        <p>
          <strong>Location:</strong> {character?.location?.name}
        </p>
        <p>
          <strong>Gender:</strong> {character?.gender}
        </p>
      </div>
      <div className="flex justify-end p-2" onClick={handleFavClick}>
        <div className="bg-red-500 p-2 rounded-full hover:bg-red-400 transition-all">
          <HeartPlusIcon color="white" />
        </div>
      </div>
    </div>
  );
}
