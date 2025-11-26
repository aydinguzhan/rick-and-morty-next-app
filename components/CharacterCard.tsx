"use client";

import Image from "next/image";

type Character = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  location: string;
};

type Props = {
  character: Character;
};

export default function CharacterCard({ character }: Props) {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:cursor-pointer transition-transform duration-300 ">
      <div className="relative w-full h-64">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 text-white">
        <h3 className="font-bold">{character.name}</h3>
        <p>
          <strong>Status:</strong> {character.status}
        </p>
        <p>
          <strong>Species:</strong> {character.species}
        </p>
        <p>
          <strong>Location:</strong> {character.location}
        </p>
      </div>
    </div>
  );
}
