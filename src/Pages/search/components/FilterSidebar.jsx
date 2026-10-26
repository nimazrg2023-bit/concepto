import { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setEmployeeRange, toggleOnlyPrivate, clearFilters } from '../../../Redux/searchSlice';

const textFilters = [
  { name: 'keyword', label: 'توصیف کلمات کلیدی', placeholder: 'دیجی‌کالا، اسنپ و ...' },
  { name: 'companyType', label: 'نوع شرکت‌ها', placeholder: 'خصوصی، دولتی...' },
  { name: 'location', label: 'مکان دفتر مرکزی شرکت‌ها', placeholder: 'تهران، شیراز، اصفهان...' },
  { name: 'industry', label: 'صنعت', placeholder: 'هوش مصنوعی، برنامه نویسی...' },
  { name: 'similarSearch', label: 'جستجو در میان شرکت‌های مشابه', placeholder: 'جستجو...' },
  { name: 'technology', label: 'تکنولوژی', placeholder: 'تکنولوژی...' },
];

export default function FilterSidebar({ onClose }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state.search);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (name) => {
    setOpenSections(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), state.employeeRange.max - 100);
    dispatch(setEmployeeRange({ ...state.employeeRange, min: value }));
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), state.employeeRange.min + 100);
    dispatch(setEmployeeRange({ ...state.employeeRange, max: value }));
  };

  const getPercent = (value) => (value / 5000) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full lg:w-160/100 flex-shrink-0 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-lg flex items-center gap-2 text-gray-800"><Filter size={20} /> همه فیلترها</h2>
        <button onClick={() => dispatch(clearFilters())} className="text-blue-500 text-sm">حذف همه</button>
      </div>
      <div className="divide-y divide-gray-100">
        {textFilters.map((filter) => (
          <div key={filter.name} className="py-3">
            <button onClick={() => toggleSection(filter.name)} className="w-full flex justify-between items-center text-sm font-medium text-gray-700 hover:text-blue-500">
              {filter.label}
              {openSections[filter.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {openSections[filter.name] && (
              <div className="mt-3">
                <input type="text" value={state[filter.name]} onChange={(e) => dispatch(setFilter({ name: filter.name, value: e.target.value }))} placeholder={filter.placeholder} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="py-6 border-t border-gray-100">
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-6">
          <span>تعداد کارمندان</span>
          <span className="text-blue-500 font-bold">{state.employeeRange.min} - {state.employeeRange.max}+</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded-lg">
          <div className="absolute h-2 bg-blue-500 rounded-lg" style={{ right: `${getPercent(state.employeeRange.min)}%`, left: `${100 - getPercent(state.employeeRange.max)}%` }}></div>
          <input type="range" min="0" max="5000" step="100" value={state.employeeRange.min} onChange={handleMinChange} className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none cursor-pointer" style={{ zIndex: 10 }} />
          <input type="range" min="0" max="5000" step="100" value={state.employeeRange.max} onChange={handleMaxChange} className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none cursor-pointer" style={{ zIndex: 11 }} />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-4">
          <span>0</span>
          <span>+5000</span>
        </div>
      </div>
      <div className="flex items-center justify-between py-4 border-t border-gray-100">
        <span className="text-sm font-medium text-gray-700">فقط شرکت‌های خصوصی</span>
        <button onClick={() => dispatch(toggleOnlyPrivate())} className={`w-12 h-6 rounded-full transition-colors relative ${state.onlyPrivate ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${state.onlyPrivate ? 'right-1' : 'right-7'}`}></span>
        </button>
      </div>
      <div className="flex gap-2 mt-8 lg:hidden">
        <button onClick={onClose} className="flex-1 bg-blue-500 text-white py-2 rounded-xl">مشاهده {state.filteredCompanies.length} شرکت</button>
        <button onClick={() => dispatch(clearFilters())} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl">حذف فیلتر</button>
      </div>
    </div>
  );
}