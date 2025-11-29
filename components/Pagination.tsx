"use client";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  filters?: {
    name?: string;
    status?: string;
    species?: string;
  };
  isClient?: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  filters,
  isClient = true,
}: PaginationProps) {
  const router = useRouter();

  const goToPage = (page: number) => {
    const params = new URLSearchParams();

    if (filters?.name) params.set("name", filters.name);
    if (filters?.status) params.set("status", filters.status);
    if (filters?.species) params.set("species", filters.species);

    params.set("page", String(page));

    const base = isClient ? "/" : "/characters";
    router.push(`${base}?${params.toString()}`);
  };

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
    <div className="flex justify-center items-center gap-2 mt-6 flex-wrap font-medium text-sm">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full transition 
          ${
            currentPage === 1
              ? "bg-gray-300 text-gray-600"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }
        `}
      >
        <ArrowLeftCircle />
      </button>

      {pageNumbers.map((num, idx) =>
        num === "…" ? (
          <span key={idx} className="px-3 py-1 text-gray-400">
            …
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => goToPage(Number(num))}
            className={`
              w-10 h-10 flex items-center justify-center rounded-full
              transition-all duration-300
              ${
                num === currentPage
                  ? "bg-sky-600 text-white font-bold scale-110 shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {num}
          </button>
        )
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full transition 
          ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-600"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }
        `}
      >
        <ArrowRightCircle />
      </button>
    </div>
  );
}
