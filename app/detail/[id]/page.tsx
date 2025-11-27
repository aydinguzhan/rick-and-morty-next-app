import EpisodeList from "@/components/EpisodeList";
import { EpisodeNode } from "@/utils/node";
import { Character } from "@/utils/types";
import { Services } from "@/utils/Utils";
import Image from "next/image";

export default async function CharacterDetail({
  params,
}: {
  params: { id: string };
}) {
  const service = new Services();
  const detailInfo = (await service.getCharacterById(params.id)) as Character;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-slate-700">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex justify-center md:block">
            <Image
              src={detailInfo.image}
              alt={detailInfo.name}
              width={192}
              height={192}
              className="rounded-xl object-cover shadow-lg border border-slate-700"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h1 className="text-3xl font-bold">{detailInfo.name}</h1>

            <div className="flex gap-3 items-center">
              <span
                className={`h-3 w-3 rounded-full ${
                  detailInfo.status === "Alive"
                    ? "bg-green-400"
                    : detailInfo.status === "Dead"
                    ? "bg-red-400"
                    : "bg-gray-400"
                }`}
              ></span>
              <p className="text-lg text-gray-300">
                {detailInfo.status} — {detailInfo.species}
              </p>
            </div>

            {detailInfo.type && (
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-300">Type:</span>{" "}
                {detailInfo.type || "Unknown"}
              </p>
            )}

            <p className="text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Gender:</span>{" "}
              {detailInfo.gender}
            </p>
          </div>
        </div>

        <div className="border-b border-slate-700 my-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold mb-2">Origin</h2>
            <p className="text-gray-300">{detailInfo.origin?.name}</p>
          </div>

          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold mb-2">Last Known Location</h2>
            <p className="text-gray-300">{detailInfo.location?.name}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Episodes</h2>
          <EpisodeList episodes={detailInfo.episode} />
        </div>
      </div>
    </div>
  );
}
