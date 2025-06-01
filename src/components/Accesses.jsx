/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import AccsessesArzeMabar from "./AccessesArzeMabar";
import AccsessesKyfiatMabar from "./AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";

export default function Accesses() {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {/* نقشه - در تبلت بالاتر از بخش متن می‌آید */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-1 md:col-span-2 lg:order-2 lg:col-span-2 rounded-xl shadow-sm min-h-[738px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-gray-700 bg-white rounded-2xl shadow-sm p-6 border border-gray-200 mb-5 lg:grid-rows-2">
            <h3 className="text-3xl sm:text-2xl  font-extrabold md:text-2xl font-modam text-center text-[#4F7C6B] mb-4 leading-snug lg:row-span-1">
              دسترسی محله بسیج
            </h3>
            <p className="text-sm sm:text-xs md:text-base text-justify md:leading-loose">
              میانگین کیفیت معابر محله بسیج با امتیاز ۴.۱ از ۵ نشان‌دهنده وضعیت
              نسبتاً مطلوب زیرساخت‌هاست. معابر عمدتاً باریک و محلی‌اند و نیازهای
              درون‌محله‌ای را پوشش می‌دهند، در حالی‌که خیابان‌های شریانی ارتباط
              با سایر مناطق را فراهم می‌سازند. با این‌ حال، ترافیک سنگین در
              ساعات اوج از چالش‌های مهم دسترسی در محله به‌شمار می‌رود.
            </p>
          </div>
          <div className="flex flex-col gap-5 order-2 md:order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AccsessesArzeMabar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AccsessesKyfiatMabar />
            </motion.div>
          </div>
        </motion.div>

        {/* متن و نمودارها */}
      </div>
    </section>
  );
}
