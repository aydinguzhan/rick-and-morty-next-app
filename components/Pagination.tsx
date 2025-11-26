"use client";

import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  searchQuery?: string; // ?name parametresi
};

export default function Pagination({
  currentPage,
  totalPages,
  searchQuery = "",
}: PaginationProps) {
  const getQuery = (page: number) =>
    searchQuery ? `?page=${page}&name=${searchQuery}` : `?page=${page}`;

  return (
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
      {/* Prev Button */}
      {currentPage > 1 ? (
        <Link
          href={getQuery(currentPage - 1)}
          className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
        >
          Prev
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded cursor-not-allowed">
          Prev
        </span>
      )}

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
          key={pageNum}
          href={getQuery(pageNum)}
          className={`px-3 py-1 rounded ${
            pageNum === currentPage
              ? "bg-sky-600 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition`}
        >
          {pageNum}
        </Link>
      ))}

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link
          href={getQuery(currentPage + 1)}
          className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
        >
          Next
        </Link>
      ) : (
        <span className="px-4 py-2 bg-gray-300 text-gray-700 rounded cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
}
