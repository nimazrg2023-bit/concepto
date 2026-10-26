import { MapPin, Star, Bookmark, ChevronLeft } from 'lucide-react';
import { popularCompaniesData } from '../../../core/constant';

export default function Part5() {
    return (
        <div className="relative flex flex-col items-center w-full py-20 mt-30 bg-white overflow-hidden" dir="rtl">
            <div className="absolute flex justify-center top-0 left-0 w-full h-[450px] bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Tooltip.png" alt="" /></div>
            <div className="relative z-10 container mx-auto px-4 w-9/10">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">شرکت‌های محبوب</h2>
                    <button className="flex items-center gap-1 text-white hover:text-gray-200 transition">مشاهده همه <ChevronLeft size={18} /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularCompaniesData.map((company) => (
                        <div key={company.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition duration-300">
                            <div className="relative h-40 bg-white overflow-hidden">
                                <img src={company.image} alt={company.name} className="w-full " />
                            </div>
                            <div className="p-5 relative">
                                <div className='flex items-end relative bottom-8'>
                                    <div className={`size-18 rounded-2xl flex relative bottom-4 items-center justify-center text-white font-bold text-2xl shadow-md border-4 border-white ${company.logoColor}`}>
                                        <img src={company.logoLetter} alt="" />
                                    </div>
                                    <div className="mb-4 pr-2">
                                        <h3 className="font-bold text-gray-800 text-lg">{company.name}</h3>
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
                                    <div className="flex items-center gap-1"><MapPin size={16} /> {company.location}</div>
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1 text-black">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83333 8.9075L9.43833 11.0833L8.48167 6.9825L11.6667 4.22333L7.4725 3.8675L5.83333 0L4.19417 3.8675L0 4.22333L3.185 6.9825L2.22833 11.0833L5.83333 8.9075Z" fill="#FFC51A" /></svg>
                                            {company.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}