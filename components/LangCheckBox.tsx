import React from "react";
import { useI18n } from "@/app/providers/I18nProvider";
type Props = {};

export default function LangCheckBox({}: Props) {
  const { locale, setLocale } = useI18n();
  const { t } = useI18n();

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as "tr" | "en")}
        className="
      appearance-none
      bg-slate-800/50 
      border border-slate-600 
      text-white 
      px-4 py-2 
      pr-10
      rounded-xl 
      backdrop-blur 
      shadow-lg 
      cursor-pointer
      transition 
      duration-200 
      hover:bg-slate-700/50 
      focus:outline-none 
      focus:ring-2 
      focus:ring-sky-400/50
    "
      >
        <option className="text-black" value="en">
          {t("english")}
        </option>
        <option className="text-black" value="tr">
          {t("turkce")}
        </option>
      </select>

      <span
        className="
      pointer-events-none 
      absolute 
      right-3 
      top-1/2 
      -translate-y-1/2 
      text-sky-300
    "
      >
        ▼
      </span>
    </div>
  );
}
