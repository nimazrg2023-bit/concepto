import { latestEventsData } from '../../../core/constant';
const filterd = latestEventsData.filter(item => item.id === 1)
export default function Part8() {
  return (
    <div className="w-full lg:mt-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xl font-bold text-gray-500 whitespace-nowrap">رویدادهای اخیر</h2>
          <div className="h-[1px] w-full bg-gray-200"></div>
          <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition whitespace-nowrap text-sm font-medium">مشاهده همه <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#737993" />
          </svg>
          </button>
        </div>
        <div className="lg:grid grid-cols-2 hidden lg:grid-cols-2 gap-6">
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
                  <div className="flex items-center gap-1"><svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83333 0C2.60833 0 0 2.60833 0 5.83333C0 10.2083 5.83333 16.6667 5.83333 16.6667C5.83333 16.6667 11.6667 10.2083 11.6667 5.83333C11.6667 2.60833 9.05833 0 5.83333 0ZM1.66667 5.83333C1.66667 3.53333 3.53333 1.66667 5.83333 1.66667C8.13333 1.66667 10 3.53333 10 5.83333C10 8.23333 7.6 11.825 5.83333 14.0667C4.1 11.8417 1.66667 8.20833 1.66667 5.83333Z" fill="#737993" />
                    <path d="M5.83333 7.91667C6.98393 7.91667 7.91667 6.98393 7.91667 5.83333C7.91667 4.68274 6.98393 3.75 5.83333 3.75C4.68274 3.75 3.75 4.68274 3.75 5.83333C3.75 6.98393 4.68274 7.91667 5.83333 7.91667Z" fill="#737993" />
                  </svg>
                    {event.location}</div>
                  <div className="flex items-center gap-1"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 7.5H5V9.16667H3.33333V7.5ZM15 3.33333V15C15 15.9167 14.25 16.6667 13.3333 16.6667H1.66667C0.741667 16.6667 0 15.9167 0 15L0.00833333 3.33333C0.00833333 2.41667 0.741667 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C14.25 1.66667 15 2.41667 15 3.33333ZM1.66667 5H13.3333V3.33333H1.66667V5ZM13.3333 15V6.66667H1.66667V15H13.3333ZM10 9.16667H11.6667V7.5H10V9.16667ZM6.66667 9.16667H8.33333V7.5H6.66667V9.16667Z" fill="#737993" />
                  </svg>
                    {event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:hidden grid-cols-1 lg:grid-cols-2 gap-6">
          {filterd.map((event) => (
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
                  <div className="flex items-center gap-1"><svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83333 0C2.60833 0 0 2.60833 0 5.83333C0 10.2083 5.83333 16.6667 5.83333 16.6667C5.83333 16.6667 11.6667 10.2083 11.6667 5.83333C11.6667 2.60833 9.05833 0 5.83333 0ZM1.66667 5.83333C1.66667 3.53333 3.53333 1.66667 5.83333 1.66667C8.13333 1.66667 10 3.53333 10 5.83333C10 8.23333 7.6 11.825 5.83333 14.0667C4.1 11.8417 1.66667 8.20833 1.66667 5.83333Z" fill="#737993" />
                    <path d="M5.83333 7.91667C6.98393 7.91667 7.91667 6.98393 7.91667 5.83333C7.91667 4.68274 6.98393 3.75 5.83333 3.75C4.68274 3.75 3.75 4.68274 3.75 5.83333C3.75 6.98393 4.68274 7.91667 5.83333 7.91667Z" fill="#737993" />
                  </svg>
                    {event.location}</div>
                  <div className="flex items-center gap-1"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33333 7.5H5V9.16667H3.33333V7.5ZM15 3.33333V15C15 15.9167 14.25 16.6667 13.3333 16.6667H1.66667C0.741667 16.6667 0 15.9167 0 15L0.00833333 3.33333C0.00833333 2.41667 0.741667 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C14.25 1.66667 15 2.41667 15 3.33333ZM1.66667 5H13.3333V3.33333H1.66667V5ZM13.3333 15V6.66667H1.66667V15H13.3333ZM10 9.16667H11.6667V7.5H10V9.16667ZM6.66667 9.16667H8.33333V7.5H6.66667V9.16667Z" fill="#737993" />
                  </svg>
                    {event.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}