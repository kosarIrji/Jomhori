import SummaryChart from "./SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import Details from "../components/config/details.json";

export default function Summary() {
  return (
    <section className="relative my-3 border bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg  py-3 sm:p-2 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" col-span-2 md:col-span-1  sm:p-2 p-5"
      >
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          جمع بندی <ClipboardCheck size={28} />
        </h3>
        <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base ">
          محله جمهوری به عنوان یکی از محله های در حال رشد بجنورد شناخته می شود
          که از محله های <strong>گران قیمت با ارزش اقتصادی بالا</strong> در شهر به شمار می رود.
          این محله با داشتن ترکیبی از بافت فرسوده، ساخت‌ و ساز جدید و زمین ‌های
          قابل توسعه، یکی از گزینه ‌های جذاب برای <strong>سرمایه‌گذاری ملکی</strong> در منطقه به
          شمار می‌رود.
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
