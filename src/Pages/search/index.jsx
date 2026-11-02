import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import { setFilter, setSortBy } from '../../Redux/searchSlice';
import FilterSidebar from './components/FilterSidebar';
import SearchNavbar from '../searchnavbar';
import CompanyList from './components/CompanyList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <div className="text-center bg-white items-start flex flex-col max-sm:p-5 pt-5 mb-8">
          <h2 className="text-3xl hidden lg:flex lg:mr-23 font-bold text-gray-800 mb-4">جستجو بر اساس شرکت‌ها</h2>
          <h2 className="text-[18px] lg:hidden  lg:mr-23 font-bold text-gray-800 mb-4">جستجو</h2>
          <SearchNavbar />
          <div className='lg:hidden h-10 mt-5 flex gap-4 w-full'>
            <div className="lg:hidden mb-4">
              <button onClick={() => setIsMobileFilterOpen(true)} className="w-full bg-white  text-gray-700 p-3 rounded-xl flex items-center justify-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.468 1.66667H10.8013L6.62634 6.91667L2.468 1.66667ZM0.176337 1.34167C1.85967 3.5 4.968 7.5 4.968 7.5V12.5C4.968 12.9583 5.343 13.3333 5.80134 13.3333H7.468C7.92634 13.3333 8.30134 12.9583 8.30134 12.5V7.5C8.30134 7.5 11.4013 3.5 13.0847 1.34167C13.5097 0.791667 13.118 0 12.4263 0H0.83467C0.143003 0 -0.248663 0.791667 0.176337 1.34167Z" fill="#0F0F0F" />
                </svg>
                فیلترها
              </button>
            </div>
            <Swiper spaceBetween={12} slidesPerView={2.3} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 8 } }} className="flex lg:hidden lg:pr-23   bg-gray-50  w-full lg:flex-wrap justify-start gap-2 ">
              {[
                { label: 'محبوب‌ترین', value: 'popular' },
                { label: 'پربازدیدترین', value: 'newest' },
                { label: ' ایرانی', value: 'top' },
                { label: ' صنعت', value: 'top_industry' },
              ].map((item) => (
                <SwiperSlide key={item.value} onClick={() => dispatch(setSortBy(item.value))} className={`px-4  py-2 rounded-lg text-sm border border-gray-500 transition ${sortBy === item.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-600 border-gray-300 hover:border-blue-500'}`}>
                  {item.label}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="lg:flex hidden lg:pr-23  bg-gray-50 pt-5  w-full lg:flex-wrap justify-start gap-2 ">
            {[
              { label: 'محبوب‌ترین', value: 'popular' },
              { label: 'پربازدیدترین', value: 'newest' },
              { label: 'برترین شرکت‌های ایرانی', value: 'top' },
              { label: 'برترین شرکت‌ها در هر صنعت', value: 'top_industry' },
            ].map((item) => (
              <button key={item.value} onClick={() => dispatch(setSortBy(item.value))} className={`px-4  py-2 rounded-lg text-sm border border-gray-500 transition ${sortBy === item.value ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-600 border-gray-300 hover:border-blue-500'}`}>
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
              <button onClick={() => setIsMobileFilterOpen(false)}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#5B6176" />
              </svg>
              </button>
            </div>
            <FilterSidebar onClose={() => setIsMobileFilterOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}