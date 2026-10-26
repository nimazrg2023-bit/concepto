import { Heart, Grid, Phone, DollarSign, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { path: "/search1", icon: <Heart size={18} />, label: 'ذخیره شده‌ها' },
    { path: "/search", icon: <Grid size={18} />, label: 'شرکت‌ها' },
    { path: "/search1", icon: <Phone size={18} />, label: 'راه‌های تماس' },
    { path: "/search1", icon: <DollarSign size={18} />, label: 'سرمایه گذار' },
    { path: "/search1", icon: <Calendar size={18} />, label: 'رویدادها' },
  ];

  return (
    <div className="w-full mr-23 bg-white border-b border-gray-200">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-center md:justify-start gap-1 md:gap-4 py-2 overflow-x-auto">
          {items.map((item, idx) => {
            const isActive = location.pathname === item.path || (item.path === '/search' && location.pathname.includes('/search'));
            
            return (
              <button key={idx} onClick={() => navigate(item.path)} className={`flex items-center gap-2 py-2 rounded-lg text-sm transition whitespace-nowrap ${isActive ? 'text-blue-600 bg-blue-50 font-bold' : 'text-gray-500 hover:text-blue-500 hover:bg-gray-50'}`}>
                {item.icon} 
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}