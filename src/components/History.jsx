/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function History() {
  return (
    <section className="my-7 bg-[#FFF6EB] rounded-2xl shadow-md p-8 border border-gray-100">
      <h3 className="sm:text-xlg  w-full   text-3xl  font-modam font-extrabold text-center  sm:text-3xl md:text-lg text-[#8F5100] mb-4 leading-snug ">
        تاریخچه محله بلوار
      </h3>

      <p className="md:leading-loose font-modam text-gray-800 text-justify text-sm sm:text-xs md:text-base  mb-10">
        محله‌ی بلوار به دلیل مجاورت با بلوار معلم ، به این نام شناخته می شود، که
        در دهه 60 شکل گرفته و توسعه جدی آن از دهه ۱۳۸۰، با افزایش ساخت و ساز های
        مسکونی و خدماتی اغاز شده است. با مقایسه تصاویر سال 2005 و 2025  
        میتوان گفت، در این محله تحولات کالبدی محسوسی دیده میشود که باعث افزایش
        ارزش اقتصادی این محله شده است.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  lg:grid-cols-2">
        {[
          { year: "۱۳۸۵", src: "./images/12_2005.png" },
          { year: "۱۴۰۴ ", src: "./images/12_2025.png" },
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
              alt={`محله بلوار در سال ${item.year}`}
              className="rounded-xl shadow-md w-full md:max-w-[600px]  object-cover"
            />
            <p className="text-center  mt-3 text-gray-500 sm:sm text-sm md:text-base leading-relaxed">
              محله بلوار - سال {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
