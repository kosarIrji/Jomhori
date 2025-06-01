import MapAnalysis from "./MapAnalysis";
import NamaBarChart from "./NamaBarChatrSelector";
import FloorChartSelector from "./FloorChartSelector";
import GhedmatChartSelector from "./GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function PhysicalAnalysis() {
  return (
    <section className="">
      <motion.div
        className="grid grid-cols-1 gap-5  md:grid-cols-3  "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 text-gray-700  bg-white rounded-2xl shadow-md shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)] p-6 border border-gray-200 text-xl sm:text-xlg md:text-base ">
          <h3 className="sm:text-3xl  w-full   text-3xl  font-modam font-extrabold text-center mb-4  md:text-lg text-[#4F7C6B]  leading-snug ">
            تحلیل کالبدی محله بسیج
          </h3>
          <p className=" md:leading-loose md:pr-6 pr-2 mt-5 md:mt-5  text-sm sm:text-xs  lg:text-base md:text-base ">
            محله بسیج  دارای ساختاری کم‌تراکم در مرکز
            محله است که بافت آن غالباً از ساختمان‌های یک تا دو طبقه با نمای سنگی
            و قدمت کمتر از ۳۰ سال تشکیل شده است. این الگوی ساخت‌وساز، ضمن حفظ
            مقیاس انسانی، بیانگر محیطی با تراکم پایین و آرامش سکونتی است. روند
            تدریجی نوسازی در سطح محله با اولویت حاشیه معابر اصلی که امکان ایجاد
            کاربری تجاری در طبقه همکف را فراهم میکند ، حاکی از گرایش رو به رشد
            این محدوده به توسعه کالبدی در سال‌های آینده است.<br/> در بُعد آماری، تحرک
            بالای ساخت‌وساز در محله با وجود 61 قطعه نوساز (با عمر ۱ تا ۵ سال) و
            ۱۱ پروژه فعال در حال ساخت، نشان‌دهنده‌ی شتاب مناسب نوسازی و جذب
            سرمایه است.<br/> در مقابل، 77 ساختمان با قدمت بالای 40 سال، به‌ویژه 21
            ملک در حاشیه معابر اصلی، نشان دهنده پتانسیل بالای محله برای بازسازی،
            نوسازی و اجرای پروژه‌های جدید است. این املاک، با امکان تغییر کاربری
            به فضاهای چندمنظوره نظیر تجاری، اداری و خدماتی، بستر مناسبی برای
            گسترش عملکردی و افزایش بازده سرمایه‌گذاری در محله بسیج فراهم
            کرده‌اند.
          </p>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5 md:flex-row mt-5  md:gap-5 items-center justify-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <FloorChartSelector />
        <GhedmatChartSelector />
        <NamaBarChart />
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
