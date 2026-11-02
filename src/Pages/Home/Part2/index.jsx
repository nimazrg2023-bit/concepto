export default function Part2() {
    const n = [
        { title: "سرمایه گذار", number: "۴۹۶+" },
        { title: "میلیارد تومان سرمایه گذاری", number: "۱۱+" },
        { title: "شرکت فعال", number: "۱۱۲,۶۱۰+" }
    ]
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex max-sm:w-65/100 max-sm:flex-col max-sm:gap-2   flex-row-reverse items-center mt-10 lg:mt-40 justify-between w-8/10">
                {n.map((item, index) => (
                    <div key={index} className="flex w-full justify-end flex-row-reverse items-center gap-2">
                        <p className="text-[20px] max-sm:text-[14px]  relative left-8 lg:left-10">{item.title}</p>
                        <p className="text-[44px] max-sm:text-[22px]  relative left-8 lg:left-10">{item.number}</p>
                        <span className="size-18 max-sm:size-14 rounded-full bg-[#FFECB3]"></span>
                    </div>
                ))}
            </div>
        </div>
    )
}