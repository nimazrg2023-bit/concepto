import { popularCompaniesData } from '../../../core/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Part5() {
    return (
        <div className="relative flex flex-col items-center w-full py-20 mt-30 bg-white overflow-hidden" dir="rtl">
            <div className="absolute flex justify-center top-0 left-0 w-full h-[200px] hidden lg:flex lg:h-[450px] bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Tooltip.png" alt="" /></div>
            <div className="absolute flex justify-center top-12 left-0 w-full lg:hidden bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Banner.png" alt="" /></div>
            <div className="relative z-10 container mx-auto lg:px-4 pr-4 w-full lg:w-9/10">
                <div className="flex justify-between items-center mb-3 lg:mb-8">
                    <h2 className="text-[18px] md:text-3xl lg:font-bold text-white">شرکت‌های محبوب</h2>
                    <button className="flex max-sm:hidden items-center gap-1 text-white hover:text-gray-200 transition">مشاهده همه <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="white" />
                    </svg>
                    </button>
                    <button className='ml-5 lg:hidden'><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="white" /></svg></button>
                </div>
                <Swiper spaceBetween={12} slidesPerView={1.4} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }} className="w-full">
                    {popularCompaniesData.map((company) => (
                        <SwiperSlide key={company.id} className="lg:h-auto py-4">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300 h-full">
                                <div className="relative lg:h-40 bg-white overflow-hidden">
                                    <img src={company.image} alt={company.name} className="w-full" />
                                </div>
                                <div className="p-5 relative">
                                    <div className='flex items-end relative lg:bottom-8'>
                                        <div className={`size-18 rounded-2xl flex relative bottom-4 items-center justify-center text-white font-bold text-2xl shadow-md border-4 border-white ${company.logoColor}`}>
                                            <img src={company.logoLetter} alt="" />
                                        </div>
                                        <div className="mb-4 pr-2">
                                            <h3 className="font-bold text-gray-800 max-sm:text-[12px] text-lg">{company.name}</h3>
                                            <p className="text-sm text-gray-500">{company.industry}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row-reverse gap-2 mb-4">
                                        <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                                            <span className="block text-xs text-gray-500 mb-1">سرمایه گذاران جدید</span>
                                            <span className="block font-bold text-blue-600">{company.investorsAmount}</span>
                                        </div>
                                        <div className="flex-1 bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                                            <span className="block text-xs text-gray-500 mb-1">مخاطبین جدید</span>
                                            <span className="block font-bold text-blue-600">{company.investorsCount}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{company.description}</p>
                                    <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
                                        <div className="flex items-center gap-1"><svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.83333 0C2.60833 0 0 2.60833 0 5.83333C0 10.2083 5.83333 16.6667 5.83333 16.6667C5.83333 16.6667 11.6667 10.2083 11.6667 5.83333C11.6667 2.60833 9.05833 0 5.83333 0ZM1.66667 5.83333C1.66667 3.53333 3.53333 1.66667 5.83333 1.66667C8.13333 1.66667 10 3.53333 10 5.83333C10 8.23333 7.6 11.825 5.83333 14.0667C4.1 11.8417 1.66667 8.20833 1.66667 5.83333Z" fill="#9095AA" />
                                            <path d="M5.83333 7.91667C6.98393 7.91667 7.91667 6.98393 7.91667 5.83333C7.91667 4.68274 6.98393 3.75 5.83333 3.75C4.68274 3.75 3.75 4.68274 3.75 5.83333C3.75 6.98393 4.68274 7.91667 5.83333 7.91667Z" fill="#9095AA" />
                                        </svg>
                                            {company.location}</div>
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center gap-1 text-black">
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83333 8.9075L9.43833 11.0833L8.48167 6.9825L11.6667 4.22333L7.4725 3.8675L5.83333 0L4.19417 3.8675L0 4.22333L3.185 6.9825L2.22833 11.0833L5.83333 8.9075Z" fill="#FFC51A" /></svg>
                                                {company.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}