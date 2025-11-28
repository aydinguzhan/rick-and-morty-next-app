"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { EpisodeNode } from "@/utils/node";
import { useI18n } from "@/app/providers/I18nProvider";
type Props = {
  episodes: string[];
};

export default function EpisodeList({ episodes }: Props) {
  const { t } = useI18n();

  const [node] = useState(() => {
    const epNode = new EpisodeNode(5);
    epNode.setEpisodes(episodes);
    return epNode;
  });

  const [, update] = useState({});

  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {node.getVisibleEpisodes().map((ep, i) => (
          <li
            key={i}
            className="bg-slate-800/40 p-4 border border-slate-700 rounded-xl text-gray-300 hover:bg-slate-700/40 transition flex items-center justify-center h-24"
          >
            {t("episode")} {ep.split("/").pop()}
          </li>
        ))}
      </ul>

      {node.canLoadMore() && (
        <button
          onClick={() => {
            node.loadMore();
            update({});
          }}
          className="flex items-center gap-2 mt-4 mx-auto text-sky-400 hover:text-sky-300 transition"
        >
          <PlusCircle size={22} />
          <span className="text-lg ">
            {t("more")} ({node.remainingEpisodes()})
          </span>
        </button>
      )}
    </div>
  );
}
