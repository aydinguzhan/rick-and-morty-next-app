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
      className="
        flex flex-col md:flex-row gap-3 mb-6 p-4
        bg-white dark:bg-gray-800/60
        rounded-xl shadow-md
        border border-gray-200 dark:border-gray-700
      "
    >
      <input
        type="text"
        placeholder="Search by name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="
          border border-gray-300 dark:border-gray-600 
          rounded-lg p-2 flex-1
          bg-gray-50 dark:bg-gray-700 
          text-gray-800 dark:text-gray-200
          focus:ring-2 focus:ring-sky-500 focus:border-sky-500
          transition-all outline-none
        "
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="
          border border-gray-300 dark:border-gray-600 
          rounded-lg p-2 w-full md:w-40
          bg-gray-50 dark:bg-gray-700 
          text-gray-800 dark:text-gray-200
          focus:ring-2 focus:ring-sky-500 focus:border-sky-500
          transition-all outline-none
        "
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="
          border border-gray-300 dark:border-gray-600 
          rounded-lg p-2 w-full md:w-40
          bg-gray-50 dark:bg-gray-700 
          text-gray-800 dark:text-gray-200
          focus:ring-2 focus:ring-sky-500 focus:border-sky-500
          transition-all outline-none
        "
      >
        <option value="">All Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>

      <button
        type="submit"
        className="
          bg-gradient-to-r from-sky-500 to-blue-600 
          text-white font-semibold
          rounded-lg p-2 px-6 
          hover:opacity-90 active:scale-95
          transition-all
        "
      >
        Filter
      </button>
    </form>
  );
}
