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
    <div className="bg-white w-85/100 rounded-2xl shadow-sm border border-gray-100 mr-40">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <span className="font-bold text-gray-700">لیست شرکت‌ها</span>
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
      <div className="md:hidden divide-y divide-gray-100">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl ${company.color}`}>
                {company.logo}
              </div>
              <span className="font-bold text-gray-800 text-lg">{company.name}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">صنعت:</div>
              <div className="text-gray-800">{company.industry}</div>
              <div className="text-gray-500">مکان:</div>
              <div className="text-gray-800">{company.location}</div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-2">{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}