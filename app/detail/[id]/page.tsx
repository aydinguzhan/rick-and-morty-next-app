import EpisodeList from "@/components/EpisodeList";
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
  const episodesDetail = await service.getEpisode(detailInfo);

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
        <div className="mt-8">
          <div className="mx-auto ">
            <div className="grid grid-cols-1 gap-6">
              {episodesDetail.length > 0 && (
                <div className="mt-8">
                  <div className="max-w-5xl mx-auto p-6">
                    <h2 className="text-2xl font-bold mb-6">Episodes Detail</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {episodesDetail.map((episode: any) => (
                        <div
                          key={episode.id}
                          className="border p-4 rounded-xl shadow hover:shadow-lg transition"
                        >
                          <h2 className="text-xl font-semibold">
                            {episode.name}
                          </h2>
                          <p className="text-gray-500">{episode.episode}</p>
                          <p className="text-sm text-gray-400">
                            {episode.air_date}
                          </p>

                          <p className="mt-3 text-sm font-medium">
                            Character Count:{" "}
                            <span className="text-blue-600">
                              {episode.characters?.length ?? 0}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
