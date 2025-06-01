import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import {
  ShieldCheck,
  WarningOctagon,
  TrendUp,
  Skull
} from "phosphor-react";

// ستون‌ها با آیکون حرفه‌ای
const columnTitles = [
  {
    key: "strengths",
    label: "نقاط قوت",
    bg: "bg-green-600",
    text: "text-white",
    icon: ShieldCheck,
  },
  {
    key: "weaknesses",
    label: "نقاط ضعف",
    bg: "bg-red-600",
    text: "text-white",
    icon: WarningOctagon,
  },
  {
    key: "opportunities",
    label: "فرصت‌ها",
    bg: "bg-blue-600",
    text: "text-white",
    icon: TrendUp,
  },
  {
    key: "threats",
    label: "تهدیدها",
    bg: "bg-yellow-500",
    text: "text-black",
    icon: Skull,
  },
];
const rows = [
  {
    strengths: "نزدیکی به مرکز شهر",
    weaknesses: "عدم انسجام بصری در نما  ",
    opportunities: " پتانسیل نوسازی و توسعه عمودی  ",
    threats:
      "سودا گری بازار ملک به دلیل تقاضای بالاتر نسبت به عرضه واحد های تازه ساخت",
  },
  {
    strengths: "دسترسی به پارک  فضا های عمومی ",
    weaknesses: " کوچه های بن بست زیاد ",
    opportunities: "فرصت ایجاد کاربری های مختلط و چند عملکردی بیشتر  ",
    threats: "فرسودگی تدریجی بخش هایی از بافت در نبود برنامه های هدفمند بهسازی",
  },
  {
    strengths: "نزدیکی به ایستگاه اتوبوس",
    weaknesses: " عدم وجود پیاده رو در  معابر فرعی ",
    opportunities: " مکان ارتقا کیفیت کالبدی  ",
    threats: "",
  },
  {
    strengths: "دسترسی مناسب به خدمات و  فضا های آموزشی",
    weaknesses: " ترفیک بالا در معابر اصلی ",
    opportunities: "  ",
    threats: "",
  },
  {
    strengths: "پیاده مداری و دسترسی پیاده به خدمات روزمره",
    weaknesses: "  ",
    opportunities: "  ",
    threats: "",
  },
];

const cellColors = {
  strengths: "bg-green-100 border-green-300",
  weaknesses: "bg-red-100 border-red-300",
  opportunities: "bg-blue-100 border-blue-300",
  threats: "bg-yellow-100 border-yellow-300",
};

const TableSection = ({ columns, colCount }) => (
  <div className="overflow-auto text-base sm:text-xs md:text-base w-full">
    <div className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-4 p-3 font-modam text-center border-b`}>
      {columns.map(({ key, label, bg, text, icon: Icon }) => (
        <div key={key} className={`rounded py-2 px-1 flex items-center justify-center gap-2 ${bg} ${text}`}>
          <Icon size={18} weight="bold" />
          <span>{label}</span>
        </div>
      ))}
    </div>

    {rows.map((row, index) => (
      <motion.div
        key={index}
        className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-4 border-b py-3 px-2 w-full`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
      >
        {columns.map(
          ({ key }) =>
            row[key]?.trim() && (
              <div
                key={key}
                className={`p-2 rounded border ${cellColors[key]}`}
              >
                {row[key]}
              </div>
            )
        )}
      </motion.div>
    ))}
  </div>
);

// خروجی اصلی
export default function SWOTSummary() {
  return (
    <div className="space-y-4 w-full h-full p-6">
      <h2 className="w-full font-bold text-[#4F7C6B] text-center">جدول خلاصه تحلیل SWOT</h2>

      {/* دسکتاپ */}
      <div className="hidden md:block">
        <TableSection columns={columnTitles} colCount={4} />
      </div>

      {/* موبایل */}
      <div className="block md:hidden space-y-6">
        <TableSection columns={columnTitles.slice(0, 2)} colCount={2} />
        <TableSection columns={columnTitles.slice(2, 4)} colCount={2} />
      </div>
    </div>
  );
}