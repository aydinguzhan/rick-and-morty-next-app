import CharacterList from "@/components/CharacterList";
import { CharacterNode, PageInfoNode } from "@/utils/node";
import { Services } from "@/utils/Utils";
export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const service = new Services();
  const characterNode = new CharacterNode();
  const pageInfoNode = new PageInfoNode();
  const page = Number(searchParams.page || 1);
  const data = await service.getCharacter({ page: String(page) });
  characterNode.setCharacters(data.results);
  pageInfoNode.setPageInfo(data.info);

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 grid gap-8">
        <CharacterList
          charactersProp={characterNode.getCharacters()}
          page={page}
        />
      </div>
    </main>
  );
}
