import React from "react";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center bg-[#FFF6EB] my-8 py-5 rounded-2xl">
      <h3 className="sm:text-xlg font-extrabold w-full   text-3xl  font-modam  text-center  sm:text-2xl md:text-lg text-[#8F5100] mb-4 leading-snug  ">
        اولویت های سرمایه گذاری
      </h3>
      {/* itmes container */}
     <div className="w-full p-4 flex flex-col lg:flex-row gap-4 justify-evenly xl:justify-center items-center">

        {/* Box 1 */}
        <div className="rrounded-xl shadow p-6 flex flex-col items-center justify-between w-full max-w-xs h-[260px] bg-orange-200">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            مشارکت در ساخت / نوسازی املاک فرسوده
          </h2>
          <p className="text-gray-600 text-center md:mt-5  text-sm sm:text-xl">
            به‌دلیل تعداد بالای قطعات 30 تا ۵۰ ساله، فرصت مناسبی برای نوسازی
            بافت محله فراهم کرده است.{" "}
          </p>
        </div>
        {/* Box 2 */}
        <div className="rounded-xl shadow p-6 flex flex-col items-center justify-between w-full max-w-xs h-[260px] bg-orange-600">
          <h2 className="text-lg font-bold mb-2 text-white">
            {" "}
            رشد بالای ساخت‌وسازهای نوساز
          </h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
            نشان‌دهنده تقاضای فعال و بستر مناسب برای سرمایه‌گذاری ساختمانی
            است.{" "}
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-6 flex flex-col items-center justify-between w-full max-w-xs h-[260px] bg-orange-100 ">
          <h2 className="text-lg font-bold mb-2 text-gray-900">
            {" "}
            خرید پروژه‌های در حال ساخت و زمین‌های خام
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-sm sm:text-xl">
            امکان ورود مستقیم به توسعه شهری را برای سازندگان مهیا کرده
            است.{" "}
          </p>
        </div>
        {/* Box 4 */}
        <div className="rounded-xl shadow p-6 flex flex-col items-center justify-between w-full max-w-xs h-[260px]  bg-orange-800 ">
          <h2 className="text-lg font-bold mb-2 text-white">ریسک سرمایه‌گذاری </h2>
          <p className="text-white text-center md:mt-5  text-sm sm:text-xl">
          در این محله به‌دلیل تحرک بالا و زیرساخت‌های مناسب، در سطح متوسط و قابل مدیریت قرار دارد.
          </p>
        </div>
      </div>
    </div>
  );
}
