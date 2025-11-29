"use client";

import { useState } from "react";
type Props = {
  onFilter: (filters: {
    name: string;
    status: string;
    species: string;
  }) => void;
};

export default function FilterBar({ onFilter }: Props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ name, status, species });
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
