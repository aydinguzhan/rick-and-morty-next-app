import "../globals.css";
import HeroSlider from "@/components/HeroSlider";

export default function Homeayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full flex justify-center mt-4">
        <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[65%]">
          <HeroSlider />
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {children}
      </div>
    </div>
  );
}
