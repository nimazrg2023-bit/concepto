import { useSelector } from 'react-redux';

export default function CompanyList() {
  const { filteredCompanies } = useSelector(state => state.search);

  if (filteredCompanies.length === 0) {
    return (
      <div className="p-12 w-85/100 mr-40 text-center text-gray-500 bg-white rounded-2xl shadow-sm border border-gray-100">
        هیچ شرکتی با این فیلترها یافت نشد.
      </div>
    );
  }

  return (
    <div className="bg-white  lg:w-85/100 rounded-2xl shadow-sm border border-gray-100 lg:mr-40">
      <div className="p-4 max-sm:border-b border-gray-500 border-b lg:border-gray-100 flex justify-between items-center bg-gray-50/50">
        <span className="font-bold  text-gray-700">لیست شرکت‌ها</span>
        <span className="text-sm text-blue-500 flex flex-row-reverse items-center gap-2 cursor-pointer">
          مشاهده بیشتر <span><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33168 15H2.49835L3.33168 9.16667H0.415015C-0.318318 9.16667 0.140015 8.54167 0.156682 8.51667C1.23168 6.61667 2.84835 3.78333 5.00668 0H5.84002L5.00668 5.83333H7.93168C8.26502 5.83333 8.44835 5.99167 8.26501 6.38333C4.97335 12.125 3.33168 15 3.33168 15Z" fill="#0D6EFD" />
          </svg>
          </span>
        </span>
      </div>
      <div className='p-5 bg-none rounded-2xl'>
        <div className="hidden rounded-lg  w-full border-1 border-gray-200 md:flex flex-col">
          <table className="w-full  text-right">
            <thead className="bg-white border-b-1 border-gray-200 text-gray-500 text-sm">
              <tr className="p-3">
                <th className="p-4 border-l-1 border-gray-200 font-medium">نام شرکت</th>
                <th className="p-4 border-l-1 border-gray-200 font-medium">صنعت</th>
                <th className="p-4 border-l-1 border-gray-200 font-medium">مکان شرکت</th>
                <th className="p-4 font-medium">توضیحات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCompanies.map((company) => (
                <tr key={company.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${company.color}`}>
                      <img className='rounded-lg' src={company.logo} alt="" />
                    </div>
                    <span className="font-medium text-gray-800">{company.name}</span>
                  </td>
                  <td className="p-4 text-gray-600 text-sm">{company.industry}</td>
                  <td className="p-4 text-gray-600 text-sm">{company.location}</td>
                  <td className="p-4 text-gray-500 text-sm max-w-xs truncate">{company.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:hidden p-5 gap-5 flex flex-col divide-y divide-gray-100">
        {filteredCompanies.map((company) => (
          <div key={company.id} className=" flex border border-gray-300 rounded-2xl flex-col gap-2">
            <div className="flex items-center justify-between border-b p-4 border-gray-300 pl-9 w-full">
              <div className='flex items-center gap-3'>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl ${company.color}`}>
                  <img className='w-8/10' src={company.logo} alt="" />
                </div>
                <span className="font-bold text-gray-800 text-lg">{company.name}</span>
              </div>
              <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#737993" />
              </svg>

            </div>
            <div className="flex flex-col w-full p-4 gap-2 text-sm">
              <div className='flex justify-between'>
                <div className="text-gray-800">صنعت</div>
                <div className="text-gray-800">{company.industry}</div>
              </div>
              <div className='flex justify-between'>
                <div className="text-gray-800">مکان شرکت</div>
                <div className="text-gray-800">{company.location}</div>
              </div>
            </div>
            <p className="text-black p-5 text-sm leading-relaxed mt-2">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}