"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
type Props = {};

export default function Navbar({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-slate-800 dark:bg-slate-700 shadow-md text-white">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-white">
            <Link href="/">Rick & Morty</Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-sky-400 transition">
              Home
            </Link>

            <Link href="/favorites" className="hover:text-sky-400 transition">
              Favorites
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden bg-slate-800 dark:bg-slate-700 px-4 py-2 flex flex-col gap-2">
            <Link href="/" className="hover:text-sky-400 transition">
              Home
            </Link>

            <Link href="/favorites" className="hover:text-sky-400 transition">
              Favorites
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
