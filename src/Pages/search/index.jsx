import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { setFilter, setSortBy } from '../../Redux/searchSlice';
import FilterSidebar from './components/FilterSidebar';
import SearchNavbar from '../searchnavbar';
import CompanyList from './components/CompanyList';

export default function SearchPage() {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(state => state.search);
  const [searchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      dispatch(setFilter({ name: 'keyword', value: q }));
    }
  }, [searchParams, dispatch]);

  return (
    <div className="min-h-screen  bg-gray-50 font-sans" dir="rtl">
      <main className="container relative bottom-10 flex flex-col  mx-auto  py-8">
        <header className="bg-white border-b  border-gray-200 py-4 w-full flex justify-between items-center">
        </header>
        <div className="text-center bg-white items-start flex flex-col pt-5 mb-8">
          <h2 className="text-3xl mr-23 font-bold text-gray-800 mb-4">جستجو بر اساس شرکت‌ها</h2>
          <SearchNavbar />
          <div className="flex pr-23 pt-5 bg-gray-50 w-full flex-wrap justify-start gap-2 ">
            {[
              { label: 'محبوب‌ترین', value: 'popular' },
              { label: 'پربازدیدترین', value: 'newest' },
              { label: 'برترین شرکت‌های ایرانی', value: 'top' },
              { label: 'برترین شرکت‌ها در هر صنعت', value: 'top_industry' },
            ].map((item) => (
              <button key={item.value} onClick={() => dispatch(setSortBy(item.value))} className={`px-4 py-2 rounded-lg text-sm border border-gray-500 transition ${sortBy === item.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-600 border-gray-300 hover:border-blue-500'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className='flex w-full items-center flex-col'>
          <div className="flex w-9/10 flex-col lg:flex-row gap-6">
            <aside className="hidden  lg:block">
              <FilterSidebar />
            </aside>
            <div className="lg:hidden w-full mb-4">
              <button onClick={() => setIsMobileFilterOpen(true)} className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm">
                <Filter size={18} /> فیلترها
              </button>
            </div>
            <div className="flex-1">
              <CompanyList />
            </div>
          </div>
        </div>
      </main>
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto scrollbar-thin">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">فیلترها</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}><X size={24} /></button>
            </div>
            <FilterSidebar onClose={() => setIsMobileFilterOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}