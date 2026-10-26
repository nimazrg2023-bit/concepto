export default function Part3() {
    return (
        <div className="w-full py-20 bg-white font-sans flex justify-center items-center" dir="rtl">
            <div className="container mx-aut25/100 flex flex-wrap justify-center gap-12 lg:gap-8">

                <div className="flex flex-col items-center group w-25/100">
                    <div className="relative w-full h-[220px] flex justify-center items-end mb-6">
                        <div className="absolute top- w-[390px] h-[130px] bg-[#dbeafe] rounded-[30px]"></div>
                        <div className="relative z-10 w-[290px] h-[200px] bg-[#E9EAEE] rounded-t-[30px] p-4 flex flex-col gap-3 ">
                            <div className="w-full h-17 bg-white rounded-xl"></div>
                            <div className="flex mt-10 flex-row gap-2">
                                <div className="flex-1 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#444859" />
                                    </svg>
                                </div>
                                <div className="flex-1 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#444859" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-14 left-7 top-10 w-14   bg-[#2563eb] rounded-xl border-2 border-gray-300 flex items-end justify-center shadow-md">
                                <img className="h-12" src="/building.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">شرکت‌های مورد علاقت رو پیدا کن</h3>
                </div>

                <div className="flex flex-col items-center group w-25/100">
                    <div className="relative w-full h-[220px] flex justify-center items-end mb-6">
                        <div className="absolute top- w-[390px] h-[130px] bg-[#60a5fa] rounded-[30px]"></div>
                        <div className="relative z-10 w-[290px] h-[200px] bg-[#E9EAEE] rounded-t-[30px] p-4 flex flex-col gap-3 ">
                            <div className="flex flex-row-reverse gap-2">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-500">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z" fill="#444859" />
                                    </svg>
                                </div>
                                <div className="flex-1 h-10 bg-white rounded-xl flex items-center px-3 gap-2 text-black text-sm">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#444859" />
                                    </svg>
                                    جستجو
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="h-18 bg-white rounded-xl"></div>
                                <div className=" h-18 bg-[#2563eb] rounded-xl border-2 border-gray-300 flex items-end justify-center shadow-md">
                                    <img className="h-15" src="/building.png" alt="" />
                                </div>
                                <div className="h-18 bg-white rounded-xl"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 ">
                                <div className="h-14 bg-white rounded-xl"></div>
                                <div className="h-14 bg-white rounded-xl"></div>
                                <div className="h-14 bg-white rounded-xl"></div>
                            </div>


                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">کسب و کارهای مناسب رو پیدا کن</h3>
                </div>

                <div className="flex flex-col items-center group w-25/100">
                    <div className="relative w-full h-[220px] flex justify-center items-end mb-6">
                        <div className="absolute top- w-[390px] h-[130px] bg-[#3b82f6] rounded-[30px]"></div>
                        <div className="relative z-10 w-[290px] h-[200px] bg-[#f1f5f9] rounded-t-[30px] p-4 flex flex-col gap-3 ">
                            <div className="w-full h-15 bg-white rounded-xl"></div>
                            <div className="flex flex-row-reverse mt-10 gap-2">
                                <div className="flex-1 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#444859" />
                                    </svg>
                                </div>
                                <div className="flex-1 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#444859" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute h-14  left-7 top-10 w-16  bg-[#2563eb] rounded-xl border-2 border-gray-300 flex items-end justify-center shadow-md">
                                <img className="h-12" src="/building.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 text-center">با کسب و کارها ارتباط بگیر</h3>
                </div>

            </div>
        </div>
    );
}