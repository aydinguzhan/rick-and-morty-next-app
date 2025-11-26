"use client";

import { SafeCharacter } from "@/utils/types";
import Image from "next/image";

type Props = {
  character: SafeCharacter;
};

export default function CharacterCard({ character }: Props) {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:cursor-pointer transition-transform duration-300 ">
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
    </div>
  );
}
