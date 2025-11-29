"use client";

import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen dark:bg-gray-800 gap-4">
        <h1 className="text-3xl font-bold text-red-600 bg-white">
          Something went wrong!
        </h1>
        <p className="mt-2 text-white">Error Description: {error.message}</p>

        <Link
          className="  rounded-xl p-2 px-4 bg-sky-500 text-white hover:bg-sky-300 transition-all "
          href={"/"}
        >
          Geri Dön
        </Link>
      </body>
    </html>
  );
}
