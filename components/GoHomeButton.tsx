"use client";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/app/providers/I18nProvider";

export default function GoHomeButton() {
  const { t } = useI18n();

  return (
    <Link
      className=" flex justify-center items-center mt-4 rounded-xl p-2 px-4 bg-sky-500 text-white hover:bg-sky-600 transition-all"
      href="/"
    >
      <HomeIcon size={18} />
      <span className="mx-1">{t("goback_home")}</span>
    </Link>
  );
}
