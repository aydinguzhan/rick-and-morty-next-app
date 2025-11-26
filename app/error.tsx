"use client";

import Link from "next/link";

export default function GlobalError({ error }: { error: Error }) {
  console.log("--->", error.stack);
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-600 bg-white">
          Bir şeyler ters gitti!
        </h1>
        <p className="mt-2 text-gray-700">Hata Açıklaması : {error.message}</p>

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
