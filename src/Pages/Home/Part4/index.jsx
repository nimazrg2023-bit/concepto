export default function Part4() {
    const Cat = [
        { title: "هوافضا", img: "/Switch.png" },
        { title: "رسانه‌ها", img: "/Switch2.png" },
        { title: "گرافیک", img: "/Switch3.png" },
        { title: "حسابداری", img: "/Switch4.png" },
        { title: "ارز دیجیتال", img: "/Switch5.png" },
        { title: "برنامه نویسی", img: "/Switch6.png" },
        { title: "هوش مصنوعی", img: "/Switch7.png" },
        { title: "حمل و نقل", img: "/Switch8.png" },
        { title: "فیلم و سینما", img: "/Switch9.png" },
        { title: "بیوتکنولوژی", img: "/Switch10.png" },
        { title: "موسیقی", img: "/Switch11.png" },
        { title: "علمی", img: "/Switch12.png" },
        { title: "تجارت الکترونیک", img: "/Switch13.png" },
        { title: "پزشکی", img: "/Switch14.png" },
    ]
    return (
        <div className="flex flex-col mt-30 items-center gap-10">
            <div className="flex flex-row-reverse items-center gap-2 justify-center w-85/100 relative">
                <hr className="w-85/100 border-t-2 border-[#CBCED7]" />
                <p className="text-[24px] text-[#737993]">دسته بندی ها</p>
            </div>
            <div className="grid-cols-7  flex-col gap-22 grid ">
                {Cat.map((item, index) => (
                    <div className="flex flex-col gap-1 items-center">
                        <div className="rounded-full p-1 border border-[#0D6EFD]">
                            <img src={item.img} alt="" />
                        </div>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}