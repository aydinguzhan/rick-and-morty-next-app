import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function GoHomeButton() {
  return (
    <Link
      className=" flex justify-center items-center mt-4 rounded-xl p-2 px-4 bg-sky-500 text-white hover:bg-sky-600 transition-all"
      href="/"
    >
      <HomeIcon size={18} />
      <span className="mx-1"> Go Back Home</span>
    </Link>
  );
}
