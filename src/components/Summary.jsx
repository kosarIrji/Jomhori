import SummaryChart from "./SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <section className="relative my-7 bg-[#FFF6EB] rounded-3xl shadow-lg px-6 py-6 sm:p-2 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" col-span-2 md:col-span-1 text-gray-700 sm:p-2 p-6 "
      >
        <h3 className="sm:text-xlg  w-full   text-3xl  font-modam font-bold text-center  sm:text-xl md:text-lg text-[#8F5100] mb-4 leading-snug ">
          جمع بندی
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-xs md:text-base w-full text-justify md:leading-loose">
          محله بلوار با توجه به موقعیت مکانی و تنوع کاربری ها و پراکندگی مناسب
          خدمات شهری که از نقاط قوت این محله محسوب می شود و با ترکیب ساخت و ساز
          های جدید و بافت قدیمی و غلبه ی کاربری مسکونی یکی از محلات برخوردار
          شهری است، در مجموع، بلوار محله‌ای با روند نوسازی فعال، زمینه ‌های
          مناسبی برای بازآفرینی دارد که برای سرمایه‌گذاران ، گزینه‌ای قابل
          اعتماد و پویا محسوب می‌شود.{" "}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
