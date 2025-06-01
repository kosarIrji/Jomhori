/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "./QualityOfLifeChart";

export default function QualityOfLife() {
  const data = [
    [93, 100, 82, 94, 81], //میرزاکوچکخان
    [97, 100, 90, 88, 86], //bsij
  ];

  const names = ["میرزاکوچکخان", "بسیج"];
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative  bg-white rounded-3xl shadow-lg px-6 py-12 border border-gray-200 col-span-2 md:col-span-1 text-gray-700 h-[100%]"
        >
          <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[#4F7C6B] mb-4 leading-snug  ">
            کیفیت زندگی محله بسیج
          </h3>
          <p className="text-gray-700 leading-relaxed  text-sm sm:text-xs md:text-base w-full text-justify md:leading-loose">
          <br/>🔐 امنیت:
            دید به خیابان _ کاربری های فعال در طول شبانه روز _ حضور افراد در
            محله در ساعات مختلف _ روشنایی مطلوب در محله<br/>🎉  سرزندگی اجتماعی: وجود
            پارک نادر مکانی برای تعاملات اجتماعی و گذران اوقات فراقت و زمین بازی
            کودکان _وجود مبلمان شهری مناسب در طول معابر اصلی_ وجود کافه و
            رستوران ، باشگاه در محله – وجود تعاملات اجتماعی به واسطه کاربری
            تجاری و مراکز خرید<br/>🚍  دسترسی به خدمات: فاصله کم تا مراکز درمانی –
            دسترسی به مراکز آموزشی _ عدم دسترسی مناسب به مسجد _ _ نزدیکی به
            بازار و مرکذ شهر _ وجود کاربری های مورد نیاز در مقیاس محله <br/>🏘️  کیفیت
            کالبدی: قدمت مناسب ساختمان ها واستحکام و نمای با کیفیت _ وضعیت مناسب
            معابر _ عدم وجود پارکینگ<br/>🌱 فضای سبز و آسایش: درخت کاری و محوطه ارایی
            معابر _ وجود پارک در محله _ وجود آلودگی صوتی در معابر اصلی_ سایه
            انداری مناسب در محله
          </p>
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 md:col-span-1  h-full"
        >
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
