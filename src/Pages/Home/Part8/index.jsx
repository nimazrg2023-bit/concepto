import { Calendar, MapPin, ChevronLeft } from 'lucide-react';
import { latestEventsData } from '../../../core/constant';

export default function Part8() {
  return (
    <div className="w-full mt-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xl font-bold text-gray-500 whitespace-nowrap">رویدادهای اخیر</h2>
          <div className="h-[1px] w-full bg-gray-200"></div>
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition whitespace-nowrap text-sm font-medium">مشاهده همه <ChevronLeft size={16} /></button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {latestEventsData.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex overflow-hidden relative group">
              <div className="relative w-2/5 md:w-1/3 flex-shrink-0 h-full">
                <img src={event.image} alt={event.title} className="w-full group-hover:scale-105 transition duration-500" />
              </div>
              <div className="flex flex-col flex-1 p-5 md:p-6 justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">{event.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{event.description}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <div className="flex items-center gap-1"><MapPin size={16} /> {event.location}</div>
                  <div className="flex items-center gap-1"><Calendar size={16} /> {event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}