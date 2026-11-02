export default function Part4() {
    const Cat = [
        { id: 1, title: "هوافضا", img: "/Switch.png" },
        { id: 2, title: "رسانه‌ها", img: "/Switch2.png" },
        { id: 3, title: "گرافیک", img: "/Switch3.png" },
        { id: 4, title: "حسابداری", img: "/Switch4.png" },
        { id: 5, title: "ارز دیجیتال", img: "/Switch5.png" },
        { id: 6, title: "برنامه نویسی", img: "/Switch6.png" },
        { id: 7, title: "هوش مصنوعی", img: "/Switch7.png" },
        { id: 8, title: "حمل و نقل", img: "/Switch8.png" },
        { id: 9, title: "فیلم و سینما", img: "/Switch9.png" },
        { id: 10, title: "بیوتکنولوژی", img: "/Switch10.png" },
        { id: 11, title: "موسیقی", img: "/Switch11.png" },
        { id: 12, title: "علمی", img: "/Switch12.png" },
        { id: 13, title: "تجارت الکترونیک", img: "/Switch13.png" },
        { id: 14, title: "پزشکی", img: "/Switch14.png" },
    ]
    const filtersdCat = Cat.filter(item => item.id < 9)
    return (
        <div className="flex flex-col mt-30 items-center gap-10">
            <div className="flex flex-row-reverse items-center gap-2 justify-center w-9/10 lg:w-85/100 relative">
                <svg className="flex mr-5 lg:hidden" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="#737993" />
                </svg>

                <hr className="w-85/100 border-t-2 border-[#CBCED7]" />
                <p className="text-[24px] max-sm:w-4/10 max-sm:text-[16px] text-gray-600">دسته بندی ها</p>
            </div>
            <div className="grid-cols-7 hidden   flex-col gap-22 lg:grid ">
                {Cat.map((item, index) => (
                    <div className="flex flex-col gap-1 items-center">
                        <div className="rounded-full p-1 border border-[#0D6EFD]">
                            <img src={item.img} alt="" />
                        </div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="grid-cols-4 lg:hidden px-4  flex-col gap-8 grid ">
                {filtersdCat.map((item, index) => (
                    <div className="flex w-11/10 flex-col gap-1 items-center">
                        <div className="rounded-full">
                            <img src={item.img} alt="" />
                        </div>
                        <p className="text-center text-[12px] w-full">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}