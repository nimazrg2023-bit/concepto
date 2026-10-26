export default function Part2() {
    const n = [
        { title: "سرمایه گذار", number: "۴۹۶+" },
        { title: "میلیارد تومان سرمایه گذاری", number: "۱۱+" },
        { title: "شرکت فعال", number: "۱۱۲,۶۱۰+" }
    ]
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-row-reverse items-center mt-40 justify-between w-8/10">
                {n.map((item, index) => (
                    <div key={index} className="flex flex-row-reverse items-center gap-2">
                        <p className="text-[20px] relative left-10">{item.title}</p>
                        <p className="text-[44px] relative left-10">{item.number}</p>
                        <span className="size-18 rounded-full bg-[#FFECB3]"></span>
                    </div>
                ))}
            </div>
        </div>
    )
}