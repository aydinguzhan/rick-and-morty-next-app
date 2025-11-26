"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("…");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("…");
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? "bg-gray-300 text-gray-700"
            : "bg-sky-500 text-white hover:bg-sky-600"
        }`}
      >
        Prev
      </button>

      {pageNumbers.map((num, idx) =>
        num === "…" ? (
          <span key={`dots-${idx}`} className="px-3 py-1 text-white">
            …
          </span>
        ) : (
          <button
            key={num}
            onClick={() => onPageChange(Number(num))}
            className={`px-3 py-1 rounded ${
              num === currentPage
                ? "bg-sky-600 text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-700"
            : "bg-sky-500 text-white hover:bg-sky-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}
