import FavoritesList from "@/components/FavoriteList";

type Props = {};

export default async function FavoritesRoute({}: Props) {
  return (
    <div>
      <FavoritesList />
    </div>
  );
}
