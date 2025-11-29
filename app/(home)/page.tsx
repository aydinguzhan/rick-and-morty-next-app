import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
import { CharacterNode } from "@/utils/node";
import { Services } from "@/utils/Utils";
import FilterBar from "@/components/FilterBar";
export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const service = new Services();
  const characterNode = new CharacterNode();
  const page = Number(searchParams.page || "1");

  const data = await service.getCharacter({ page: String(page) });

  characterNode.setCharacters(data.results);

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 grid gap-8">
        <FilterBar />
        <CharacterList charactersProp={characterNode.getCharacters()} />
        <Pagination currentPage={page} totalPages={data.info.pages} />
      </div>
    </main>
  );
}
