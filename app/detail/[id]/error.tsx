"use client";

import Home from "@/app/page";
import GoHomeButton from "@/components/GoHomeButton";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function GlobalError({ error }: { error: Error }) {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-2">Kayıt Bulunamadı</h1>
      {id && (
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          <span className="font-mono">{id}</span> not found
        </p>
      )}
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Error Info : {error.message}
      </p>

      <GoHomeButton />
    </div>
  );
}
