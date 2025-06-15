import MapAnalysis from "./MapAnalysis";
import NamaBarChart from "./NamaBarChatrSelector";
import FloorChartSelector from "./FloorChartSelector";
import GhedmatChartSelector from "./GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("nama");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 bg-[#FFF6EB] rounded-3xl shadow-lg px-4 sm:px-6 md:px-6 py-12 border border-gray-200 md:col-span-1 text-gray-700 h-full">
          <h3 className="sm:text-3xl  text-3xl  font-modam font-extrabold text-center mb-4  md:text-lg text-[#8F5100] leading-snug ">
            تحلیل کالبدی محله بلوار
          </h3>
          <p className=" md:leading-loose md:pr-6 pr-2 mt-10 md:mt-5  text-sm sm:text-xs  lg:text-base md:text-base ">
            محله بلوار در یک مرحله گذار کالبدی قرار دارد؛ جایی که یک بافت قدیمی
            کم ‌تراکم در کنار ساختاری در حال نوسازی قرار گرفته است. در این محله
            بیشترین فراوانی ساخت وساز مربوط به ساختمان های یک و دو طبقه است که
            به صورت متوازن در سراسر محله پراکنده شده اند. ساختمان های بلند مرتبه
            عمدتا در حاشیه خیابان های فلسطین و استقلال ساخته شده اند که میزان
            تراکم بالا در حاشیه معابر پر تردد را نشان می دهد.
            <br /> براساس داده های موجود، محله بلوار دارای بافتی قدیمی و در برخی
            نقاط تازه ساخت است. وجود 160 قطعه بالای 40 سال به همراه 4 قطعه زمین
            بایر نشان از ظرفیت این محله برای مشارکت در ساخت و بازسازی است. وجود
            73 قطعه حدودا 5 سال ساخت، نشان دهنده میزان بالای تحرک سرمایه گذاری و
            رشد ساخت و ساز در سال های اخیر است که این روند مثبت در محله بلوار به
            بازسازی چهره شهری کمک می کند.‌ همچنین وجود ۱۰ پروژه در حال ساخت
            بیانگر آغاز یک چرخه نوسازی و رشد سرمایه گذاری کالبدی با مشارکت بخش
            خصوصی است.{" "}
          </p>
          <motion.div
            className="flex- flex-col  gap-5   "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-4 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-10">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex flex-wrap gap-3 w-full ">
                {[
                  { label: "نما", value: "nama" },
                  { label: "طبقات", value: "tabaghat" },
                  { label: "قدمت", value: "ghemat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-28 text-sm sm:text-base"
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
                  className=" h-10 px-3 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-amber-600 hover:bg-amber-700 transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto mt-8">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}
              {selectedComponent === "nama" && (
                <NamaBarChart chartType={chartType} />
              )}
              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-5"
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
