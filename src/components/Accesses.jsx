/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import AccsessesArzeMabar from "./AccessesArzeMabar";
import AccsessesKyfiatMabar from "./AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";

export default function Accesses() {
  return (
    <section className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#FFF6EB] rounded-2xl shadow-sm p-6 border border-gray-200 text-gray-700"
        >
          <h3 className="text-3xl sm:text-2xl font-extrabold md:text-2xl font-modam text-center text-[#8F5100] leading-snug">
            دسترسی محله بلوار
          </h3>
          <p className="text-sm sm:text-xs md:text-base text-justify md:leading-loose mt-4">
            محله بلوار با وجود دسترسی مناسبی که به مرکز شهر و خدمات شهری دارد،
            ساختار شبکه معابر آن به گونه ای است که بیشتر رفت و آمد ها از طریق
            خیابان های فلسطین، استقلال و ابوریحان انجام میشود که به دلیل وجود
            مراکز آموزشی و اداری پر تردد تر هستند. اما سایر معابر فرعی آرام و
            کم‌ترافیک هستند. این ویژگی باعث کاهش آلودگی صوتی و ارتقای کیفیت
            سکونت و محیطی کم تنش برای ساکنین در بافت مرکزی محله شده است.
          </p>
        </motion.div>

        {/* نمودار عرض معبر */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AccsessesArzeMabar />
        </motion.div>

        {/* نمودار کیفیت معبر */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AccsessesKyfiatMabar />
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 rounded-xl shadow-sm min-h-[738px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
