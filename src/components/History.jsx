/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function History() {
  return (
    <section className="my-7 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
      <h3 className="sm:text-xlg  w-full   text-3xl  font-modam font-extrabold text-center  sm:text-3xl md:text-lg text-[#4F7C6B] mb-4 leading-snug ">
        تاریخچه محله بسیج
      </h3>

      <p className="md:leading-loose font-modam text-gray-800 text-justify text-sm sm:text-xs md:text-base  mb-10">
        محله بسیج، معروف به میرزا رضای کرمانی، در دهه ۷۰ شمسی با هدف اسکان
        نیروهای نظامی و کارکنان دولت شکل گرفت و با رشد تدریجی و موقعیت مناسب، به
        یکی از محلات با ارزش بجنورد تبدیل شده است. طی سال‌های اخیر، روند نوسازی
        تدریجی و ساخت‌وساز متراکم، همراه با افزایش تقاضای سکونت، موجب رشد مستمر
        ارزش اقتصادی آن شده است .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-2">
        {[
          { year: "۱۳۸۵", src: "./images/1385.jpg" },
          { year: "۱۴۰۴ ", src: "./images/1404.jpg" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img
              src={item.src}
              alt={`محله بسیج در سال ${item.year}`}
              className="rounded-xl shadow-md w-full md:max-w-[600px]  object-cover"
            />
            <p className="text-center  mt-3 text-gray-500 sm:sm text-sm md:text-base leading-relaxed">
              محله بسیج - سال {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
