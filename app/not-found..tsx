import GoHomeButton from "@/components/GoHomeButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-6xl font-extrabold mb-4 text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center max-w-md">
        Sorry, the page you were looking for could not be found. The URL may be
        incorrect or the page may have moved.
      </p>
      <GoHomeButton />
    </div>
  );
}
