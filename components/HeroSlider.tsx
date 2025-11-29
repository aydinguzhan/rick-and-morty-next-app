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
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden rounded-2xl shadow-xl">
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

          <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 text-white">
            <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
              {current.title}
            </h1>
            <p className="text-lg md:text-2xl mt-2 drop-shadow-lg">
              {current.subtitle}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-5 right-6 flex gap-3">
        {slides.map((s, i) => (
          <div
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 md:w-5 md:h-5 rounded-full cursor-pointer transition-all ${
              i === index
                ? "bg-white scale-150 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
