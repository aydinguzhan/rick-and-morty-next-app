import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
import { CharacterNode } from "@/utils/node";
import { Services } from "@/utils/Utils";

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
      <CharacterList charactersProp={characterNode.getCharacters()} />
      <Pagination currentPage={page} totalPages={data.info.pages} />
    </main>
  );
}
