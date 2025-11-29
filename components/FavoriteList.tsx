"use client";
import { useEffect } from "react";
import { FavoriteCharacter } from "@/utils/types";
import Image from "next/image";
import { useFavoriteStore } from "@/utils/store/favoriteStore";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useI18n } from "@/app/providers/I18nProvider";
type Props = {};

export default function FavoritesList({}: Props) {
  const favorites = useFavoriteStore((state) => state.favorites);
  const setFavorites = useFavoriteStore((state) => state.setFavorites);
  const removeFavorite = useFavoriteStore((s) => s.removeFavorite);
  const { t } = useI18n();

  const router = useRouter();
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      const parsed: FavoriteCharacter[] = JSON.parse(saved);
      setFavorites(parsed);
    }
  }, [setFavorites]);
  if (!favorites.length)
    return (
      <p className="text-gray-400 text-center mt-8">
        {t("no_favorites_added_yet")}
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 grid gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {favorites.map((char) => (
          <div
            key={char.id}
            className="bg-slate-800 p-4 rounded-xl flex flex-col items-center  hover:cursor-pointer transition-transform duration-300"
            onClick={() => router.push("/detail/" + String(char.id))}
          >
            <div className="w-full flex justify-end">
              <div className="p-1 bg-red-600 rounded-full flex justify-center items-center hover:bg-red-500 transition-all">
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    removeFavorite(char.id);
                  }}
                >
                  <X color="white" />
                </button>
              </div>
            </div>
            <Image
              src={char.image ?? "/photos.avif"}
              alt={char.name ?? "char name"}
              width={150}
              height={150}
              className="rounded-xl object-cover hover:scale-95 transition-all"
            />
            <h3 className="mt-2 font-semibold text-white">{char.name}</h3>
            <p className="text-gray-300 text-sm">
              {char.species} - {char.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
