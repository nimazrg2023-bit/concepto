import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import { jobOpportunitiesData } from '../../../core/constant';

export default function JobOpportunities() {
  return (
    <div className="w-full py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="flex items-center gap-4 mb-14">
          <h2 className="text-xl font-bold text-gray-500 whitespace-nowrap">فرصت‌های شغلی</h2>
          <div className="h-[1px] w-full bg-gray-200"></div>
        </div>
        <div className="relative px-2">
          <Swiper modules={[Navigation, Autoplay]} spaceBetween={24} slidesPerView={5} dir="rtl" autoplay={{ delay: 3000, disableOnInteraction: false }} navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }} breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }} className="pb-4 pt-10">
            {jobOpportunitiesData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-gray-50 rounded-3xl p-6 pt-14 flex flex-col items-center justify-center text-center relative mt-8 hover:shadow-lg transition duration-300 h-full border border-gray-100">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 size-18 rounded-2xl shadow-md border border-gray-100 bg-white flex items-center justify-center">
                    <span className={`text-2xl font-black`}>
                      <img className='w-full rounded-2xl' src={item.logoText} alt="" />
                    </span>
                  </div>
                  <span className="text-gray-600 text-sm mb-3 font-medium mt-4">{item.jobsCount}</span>
                  <a href={item.link} className="text-blue-600 font-bold text-sm hover:underline">{item.companyName}</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev-custom absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-xl border border-gray-50 flex items-center justify-center text-gray-600 hover:text-blue-500 transition cursor-pointer"><ChevronRight size={24} /></button>
          <button className="swiper-button-next-custom absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 bg-white w-12 h-12 rounded-full shadow-xl border border-gray-50 flex items-center justify-center text-gray-600 hover:text-blue-500 transition cursor-pointer"><ChevronLeft size={24} /></button>
        </div>
      </div>
    </div>
  );
}