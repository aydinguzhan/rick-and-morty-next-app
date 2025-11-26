import CharacterList from "@/components/CharacterList";
import Pagination from "@/components/Pagination";
export default async function Home() {
  // const res = await fetch("https://rickandmortyapi.com/api/character", {
  //   cache: "no-store",
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to fetch characters");
  // }

  // const data = await res.json();
  const currentPage = 1; // şu anki sayfa
  const totalPages = 5; // toplam sayfa sayısı
  const searchQuery = ""; // filtre query param (şimdilik boş)
  const characters = [
    {
      id: "sadasdas",
      image:
        "https://www.pr-agent.media/wp-content/uploads/2025/07/unsplash-800x445.jpg",
      name: "deneme",
      species: "dsfdsf",
      status: "active",
      gender: "Female",
      location: "USD",
    },
    {
      id: "sadadsadassdas",
      image:
        "https://www.pr-agent.media/wp-content/uploads/2025/07/unsplash-800x445.jpg",
      name: "deneme",
      species: "dsfdsf",
      status: "active",
      gender: "Female",
      location: "USD",
    },
    {
      id: "sadadsadsdasdassdas",
      image:
        "https://www.pr-agent.media/wp-content/uploads/2025/07/unsplash-800x445.jpg",
      name: "deneme",
      species: "dsfdsf",
      status: "active",
      gender: "Female",
      location: "USD",
    },
    {
      id: "sadadsaaaaadassdas",
      image:
        "https://www.pr-agent.media/wp-content/uploads/2025/07/unsplash-800x445.jpg",
      name: "deneme",
      species: "dsfdsf",
      status: "active",
      gender: "Female",
      location: "USD",
    },
  ];
  return (
    <main className="min-h-screen">
      <CharacterList characters={characters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        searchQuery={searchQuery}
      />
    </main>
  );
}
