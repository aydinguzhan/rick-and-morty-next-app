"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Rick & Morty",
    subtitle: "Kaosa hazır mısın?",
    image: "/morty.png",

    video: null,
  },
  {
    id: 2,
    title: "Morty Smith",
    subtitle: "Iyi bak bana iyi",
    image: "/rick_morty.png",
    video: null,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-[70vh] overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence>
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {current.video ? (
            <video
              src={current.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={current.image!}
              alt={current.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          )}

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl font-bold drop-shadow-lg">
              {current.title}
            </h1>
            <p className="text-xl mt-2 drop-shadow-lg">{current.subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 right-6 flex gap-3">
        {slides.map((s, i) => (
          <div
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-150" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
