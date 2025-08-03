import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "./FloorChartSelector";
import GhedmatChartSelector from "./GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { FaCity, FaLightbulb } from "react-icons/fa";
import { Landmark } from "lucide-react";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              بررسی کالبدی بافت شهری محله جمهوری
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                محله جمهوری دارای ساختاری{" "}
                <strong className="text-orange-800">مسکونی و کم</strong> ارتفاع
                است و بیشتر قطعات آن شامل ساختمان‌ های یک تا دو طبقه‌ اند. با
                این حال، در امتداد خیابان ‌های اصلی مانند جمهوری و فردوسی،
                ساختمان‌ های پنج تا هفت طبقه به چشم می‌خورد که بیانگر آغاز تحولی
                در ساختار کالبدی و تمایل به ساخت ‌و ساز متراکم ‌تر است.
              </p>
            </div>
            {/* باکس ۲: واقعیت آماری */}
            <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
                <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
                  <Landmark size={22} className="text-[var(--sidebar)]" />
                  قدمت ساخت در محله جمهوری:
                </span>
                از منظر قدمت، محله جمهوری دارای ۱۷۴ ساختمان با عمر ۳۰ تا ۵۰ سال
                و ۲۴ ملک غیرقابل سکونت است که نشان‌دهنده فرسودگی نسبی بافت و
                <strong className="text-red-800">ضرورت نوسازی</strong> بخشی از
                کالبد محله می‌باشد. در کنار آن، وجود ۱۳ قطعه زمین بایر فرصت
                مناسبی برای توسعه ساخت و ساز و پروژه‌ های مشارکتی فراهم کرده
                است. در مقابل، ۱۶۹ ساختمان نوساز (۱ تا ۵ ساله)، ۳۰۵ ساختمان با
                عمر متوسط (۵ تا ۱۵ ساله) و ۲۶ پروژه در حال ساخت، بیانگر{" "}
                <strong>
                  پویایی بازار ساخت ‌و ساز و جذابیت بالای محله برای
                  سرمایه‌گذاران{" "}
                </strong>
                در سال‌ های اخیر است.
              </p>
            </div>

            <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800 ">
              به طور کلی این محله، ظرفیت بالایی برای <strong className="text-green-800">نوسازی وبازآفرینی</strong> شهری
              دارد. ساختمان ‌های قدیمی و زمین‌ های بایر، فرصت‌ های خوبی برای
              توسعه ‌اند و ساخت ‌و ساز های جدید در کنار خیابان‌ های اصلی، نشانه‌
              ای از حرکت به ‌سوی  <strong>بلند مرتبه ‌سازی </strong>است. اگر این روند با برنامه
              ‌ریزی و طراحی اصولی همراه شود، می‌تواند چهره محله را متحول و کیفیت
              کالبدی آن را به‌ طور چشمگیری ارتقا دهد.
            </p>
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
