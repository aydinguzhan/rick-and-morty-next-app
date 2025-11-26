"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialName = searchParams.get("name") || "";
  const initialStatus = searchParams.get("status") || "";
  const initialSpecies = searchParams.get("species") || "";

  const [name, setName] = useState(initialName);
  const [status, setStatus] = useState(initialStatus);
  const [species, setSpecies] = useState(initialSpecies);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (name) params.set("name", name);
    if (status) params.set("status", status);
    if (species) params.set("species", species);

    params.set("page", "1");

    router.push(`/characters?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 mb-4 items-center"
    >
      <input
        type="text"
        placeholder="Search by name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 flex-1 w-full sm:w-auto"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="border rounded p-2"
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <button
        type="submit"
        className="bg-sky-500 text-white rounded p-2 hover:bg-sky-600 transition"
      >
        Filter
      </button>
    </form>
  );
}
