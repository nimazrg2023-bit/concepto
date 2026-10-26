import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, DollarSign, Phone, Grid, Heart } from 'lucide-react';
import { companiesData } from '../../core/constant';

export default function HomePage() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
        } else {
            navigate('/search');
        }
    };

    return (
        <div className="min-h-screen w-full bg-gray-50 font-sans" dir="rtl">
            <header className="bg-white border-b border-gray-200 py-4 w-full flex justify-between items-center">

            </header>
            <div className='w-full pr-23 bg-white flex pt-5 flex-col items-start'>
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-right">جستجو</h1>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-4">
                    {[
                        { onclick: "/search1", icon: <Heart size={18} />, label: 'ذخیره شده‌ها' },
                        { onclick: "/search" ,  icon: <Grid size={18} />, label: 'شرکت‌ها' },
                        { onclick: "/search1" ,  icon: <Phone size={18} />, label: 'راه‌های تماس' },
                        { onclick: "/search1" ,  icon: <DollarSign size={18} />, label: 'سرمایه گذار' },
                        { onclick: "/search1" ,  icon: <Calendar size={18} />, label: 'رویدادها' },
                    ].map((item, idx) => (
                        <div key={idx} onClick={() => navigate(item.onclick)} className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                            {item.icon} {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <main className="container mx-auto relative bottom-5 px-4 py-12 w-9/10">
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
                    <div className="divide-y p-6 divide-gray-100">
                        {companiesData.slice(0, 10).map((company) => (
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