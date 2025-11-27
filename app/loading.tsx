export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-t-sky-400 border-b-sky-400 border-l-transparent border-r-transparent rounded-full animate-spin"></div>

        <p className="text-white text-lg font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
