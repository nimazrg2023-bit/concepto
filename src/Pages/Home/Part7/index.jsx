import { Calendar, ChevronLeft } from 'lucide-react';
import { latestNewsData } from '../../../core/constant';

export default function Part7() {
    return (
        <div className="relative w-full py-20 bg-white overflow-hidden" dir="rtl">
            <div className="absolute flex justify-center top-0 left-0 w-full h-[450px] bg-cover bg-center bg-no-repeat z-0"><img className='w-full' src="/Tooltip.png" alt="" /></div>
            <div className="relative z-10 container mx-auto px-4 w-9/10 max-w-7xl">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl md:text-xl font-semibold text-white">تازه‌ترین اخبار</h2>
                    <button className="flex items-center gap-1 text-white hover:text-gray-200 transition">مشاهده همه <ChevronLeft size={18} /></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestNewsData.map((news) => (
                        <div key={news.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition duration-300">
                            <div className="relative h-48 md:h-56 overflow-hidden">
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
                                        <Calendar size={14} />
                                        <span>{news.date}</span>
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