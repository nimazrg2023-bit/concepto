import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { filteredCompanies } = useSelector(state => state.search);
    if (filteredCompanies.length === 0) {
        return (
            <div className="p-12 lg:w-85/100  lg:mr-40 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-gray-100">
                هیچ شرکتی با این فیلترها یافت نشد.
            </div>
        );
    }
    return (
        <div className="min-h-screen w-full bg-gray-50 font-sans" dir="rtl">
            <header className="bg-white lg:border-b border-gray-200 py-4 w-full flex justify-between items-center"></header>
            <div className='w-full lg:pr-23 max-sm:px-5 bg-white flex lg:pt-5 flex-col items-start'>
                <h1 className="lg:text-2xl text-[18px] font-bold text-gray-800 mb-8 text-right">جستجو</h1>
                <div className="lg:flex hidden lg:flex-wrap justify-center lg:gap-6 text-[14px]  lg:text-sm text-gray-600 mb-4">
                    {[
                        {
                            onclick: "/search1", icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#5B6176" />
                            </svg>
                            , label: 'ذخیره شده‌ها'
                        },
                        {
                            onclick: "/search", icon: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#5B6176" />
                            </svg>
                            , label: 'شرکت‌ها'
                        },
                        {
                            onclick: "/search1", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#5B6176" />
                            </svg>
                            , label: 'راه‌های تماس'
                        },
                        {
                            onclick: "/search1", icon: <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.48 7.9C3.21 7.31 2.48 6.7 2.48 5.75C2.48 4.66 3.49 3.9 5.18 3.9C6.96 3.9 7.62 4.75 7.68 6H9.89C9.82 4.28 8.77 2.7 6.68 2.19V0H3.68V2.16C1.74 2.58 0.18 3.84 0.18 5.77C0.18 8.08 2.09 9.23 4.88 9.9C7.38 10.5 7.88 11.38 7.88 12.31C7.88 13 7.39 14.1 5.18 14.1C3.12 14.1 2.31 13.18 2.2 12H0C0.12 14.19 1.76 15.42 3.68 15.83V18H6.68V15.85C8.63 15.48 10.18 14.35 10.18 12.3C10.18 9.46 7.75 8.49 5.48 7.9Z" fill="#5B6176" />
                            </svg>
                            , label: 'سرمایه گذار'
                        },
                        {
                            onclick: "/search1", icon: <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z" fill="#5B6176" />
                            </svg>
                            , label: 'رویدادها'
                        },
                    ].map((item, idx) => (
                        <div key={idx} onClick={() => navigate(item.onclick)} className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                            {item.icon} {item.label}
                        </div>
                    ))}
                </div>
                <div className="flex lg:hidden w-95/100 justify-between lg:flex-wrap lg:gap-6 text-[14px]  lg:text-sm text-gray-600 mb-4">
                    {[
                        {
                            onclick: "/search1", icon: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#5B6176" />
                            </svg>
                            , label: 'ذخیره شده‌ها'
                        },
                        {
                            onclick: "/search", icon: <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#5B6176" />
                            </svg>
                            , label: 'شرکت‌ها'
                        },
                        {
                            onclick: "/search1", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#5B6176" />
                            </svg>
                            , label: 'راه‌های تماس'
                        },
                    ].map((item, idx) => (
                        <div key={idx} onClick={() => navigate(item.onclick)} className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                            {item.icon} {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <main className="container mx-auto relative bottom-5 lg:px-4 py-12 w-9/10">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between border-b border-gray-400 p-6 items-center">
                        <span className="font-bold text-gray-700 flex items-center gap-2">
                            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.36 2L7.76 4H13V10H9.64L9.24 8H2V2H7.36ZM9 0H0V17H2V10H7.6L8 12H15V2H9.4L9 0Z" fill="#444859" /></svg>
                            پیشنهادها
                        </span>
                        <span className="text-sm text-blue-500 flex flex-row-reverse gap-2 items-center cursor-pointer">مشاهده بیشتر<span>
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33168 15H2.49835L3.33168 9.16667H0.415015C-0.318318 9.16667 0.140015 8.54167 0.156682 8.51667C1.23168 6.61667 2.84835 3.78333 5.00668 0H5.84002L5.00668 5.83333H7.93168C8.26502 5.83333 8.44835 5.99167 8.26501 6.38333C4.97335 12.125 3.33168 15 3.33168 15Z" fill="#0D6EFD" /></svg>
                        </span></span>
                    </div>
                    <div className="divide-y p-4 lg:p-6 divide-gray-100">
                        {filteredCompanies.slice(0, 10).map((company) => (
                            <div key={company.id} className="py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${company.color}`}>
                                        <img className='rounded-lg' src={company.logo} alt="" />
                                    </div>
                                    <span className="font-medium text-gray-800">{company.name}</span>
                                </div>
                                <button className="text-gray-400 hover:text-blue-500">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V14.97L7 12.83L2 14.97V2H8V0H2C0.9 0 0 0.9 0 2V18L7 15L14 18V8H12ZM16 4H14V6H12V4H10V2H12V0H14V2H16V4Z" fill="#737993" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}