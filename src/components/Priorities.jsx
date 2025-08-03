import React from "react";
import { TrendingUp } from "lucide-react";
import Details from "../components/config/details.json";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        اولویت های سرمایه گذاری محله {Details.alley.name}
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full p-4  flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs h-[190px] bg-gradient-to-t  from-yellow-100 via-yellow-200 to-white">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            {Details.priorities[0].title}:
          </h2>
          <p className="text-gray-600 text-center md:mt-5 text-base">
            {Details.priorities[0].context}
          </p>
        </div>
        {/* Box 2 */}
        <div
          className="rounded-xl shadow p-4 flex flex-col  items-center justify-between w-full max-w-xs h-[190px] bg-gradient-to-t from-amber-700 via-amber-600 to-amber-800"
        >
          <h2 className="text-lg font-bold mb-2 text-white">
            {" "}
            {Details.priorities[1].title}:
          </h2>
          <p className="text-white text-center md:mt-5 text-base">
          سرمایه‌گذاری در محله جمهوری بر <strong>نوسازی بافت فرسوده و ساخت‌ و ساز بلند مرتبه</strong> با کاربری مختلط در حاشیه معابر اصلی متمرکز است.
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs h-[190px] bg-gradient-to-t from-orange-200 via-orange-100 to-orange-300">
          <h2 className="text-lg font-bold mb-2 text-gray-900">
            {Details.priorities[2].title}:{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5 text-base">
          ظرفیت توسعه مناسب <strong>برای کاربری‌ های مسکونی، اداری و خدماتی.</strong>
          </p>
        </div>
        {/* Box 4 */}
        <div
          className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs h-[190px] bg-gradient-to-t from-amber-600 via-amber-500 to-amber-700"
        >
          <h2 className="text-lg font-bold mb-2 text-gray-900">
            {Details.priorities[3].title}:{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5 text-base">
        <strong>  متوسط رو به پایین</strong>؛ به دلیل بافت در حال نوسازی و جذب سرمایه جدید همچنین موقعیت مناسب.
          </p>
        </div>
      </div>
    </div>
  );
}
