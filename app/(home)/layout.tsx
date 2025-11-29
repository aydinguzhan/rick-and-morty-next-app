import "../globals.css";
import HeroSlider from "@/components/HeroSlider";

export default function Homeayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full p-4">
        <HeroSlider />
      </div>

      <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
