import { latestNewsData } from '../../../core/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Part7() {
    return (
        <div className="relative w-full py-20 bg-white overflow-hidden" dir="rtl">
            <div className="absolute  justify-center top-0 left-0 w-full h-[200px] hidden lg:flex lg:h-[450px] bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Tooltip.png" alt="" /></div>
            <div className="absolute flex justify-center top-12 left-0 w-full lg:hidden bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Banner.png" alt="" /></div>
            <div className="relative z-10 container mx-auto pr-4 lg:px-4 lg:w-9/10 max-w-7xl">
                <div className="flex justify-between items-center mb-3 lg:mb-8">
                    <h2 className="text-[18px] md:text-3xl lg:font-bold text-white">تازه ترین اخبار</h2>
                    <button className="flex max-sm:hidden items-center gap-1 text-white hover:text-gray-200 transition">مشاهده همه <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#737993" />
                    </svg>
                    </button>
                    <button className='ml-5 lg:hidden'><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="white" /></svg></button>
                </div>
                <Swiper spaceBetween={12} slidesPerView={1.4} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestNewsData.map((news) => (
                        <SwiperSlide key={news.id} className="bg-white  rounded-2xl shadow-lg  overflow-hidden flex flex-col group ">
                            <div className="relative h-38 md:h-56 overflow-hidden">
                                <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs text-gray-400 mb-2">{news.category}</span>
                                <h3 className="font-bold text-gray-800 text-lg leading-relaxed mb-3 line-clamp-2">{news.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3 flex-1">{news.description}</p>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <img src={news.authorAvatar} alt={news.authorName} className="w-8 h-8 rounded-full object-cover" />
                                        <span className="text-sm text-gray-600">{news.authorName}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33333 7.5H5V9.16667H3.33333V7.5ZM15 3.33333V15C15 15.9167 14.25 16.6667 13.3333 16.6667H1.66667C0.741667 16.6667 0 15.9167 0 15L0.00833333 3.33333C0.00833333 2.41667 0.741667 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C14.25 1.66667 15 2.41667 15 3.33333ZM1.66667 5H13.3333V3.33333H1.66667V5ZM13.3333 15V6.66667H1.66667V15H13.3333ZM10 9.16667H11.6667V7.5H10V9.16667ZM6.66667 9.16667H8.33333V7.5H6.66667V9.16667Z" fill="#737993" />
                                        </svg>
                                        <span>{news.date}</span>
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