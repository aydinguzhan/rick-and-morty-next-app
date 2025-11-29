export default function CharacterCardSkeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />

      <div className="p-4 space-y-3">
        {/* Name skeleton */}
        <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Status skeleton */}
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>

        {/* Species skeleton */}
        <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
