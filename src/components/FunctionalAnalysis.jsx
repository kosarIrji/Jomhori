import FunctionalPieChart from "./FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-5 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2  grid-cols-1  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          بررسی عملکرد شهری در محله چمهوری، از سکونت پذیری تا فعالیت های اقتصادی
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          محله جمهوری بجنورد با غلبه کاربری‌ های مسکونی و حضور گسترده کاربری
          ‌های تجاری و مختلط، ساختاری <strong>هماهنگ و سکونت‌ پذیر</strong> دارد. خدمات شهری
          مانند آموزشی، اداری، درمانی و مذهبی در کنار فضا های عمومی چون <strong> پارک
          فردوسی و سینما گلشن</strong>، کیفیت زندگی را ارتقا داده ‌اند. این تنوع عملکردی،
          جمهوری را به یکی از <strong className="text-green-800">محله ‌های برخوردار و دارای ظرفیت رشد</strong> شهری تبدیل
          کرده است. محله از منظر عملکردی، پویایی و آرامش را در خود جای داده است.
        </p>
      
      </div>
      <div className=" lg:col-span-3 grid-cols-1  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="grid-cols-1 mb-3 lg:col-span-5 lg:mb-0  shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
