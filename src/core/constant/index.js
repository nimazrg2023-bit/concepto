export const companiesData = [
  { id: 1, name: "بلوبانک", logo: "/logo1.jpg", color: "bg-blue-500", industry: "هوش مصنوعی", location: "تهران، ایران", employees: 500, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
  { id: 2, name: "اسنپ", logo: "/logo2.png", color: "bg-green-500", industry: "حمل و نقل", location: "شیراز، ایران", employees: 1200, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
  { id: 3, name: "علی‌بابا", logo: "/logo3.png", color: "bg-yellow-500", industry: "برنامه نویسی", location: "اصفهان، ایران", employees: 300, description: "لورم ایپسوم متن ساختگی...", isPrivate: false },
  { id: 4, name: "اسنپ فود", logo: "/logo4.png", color: "bg-pink-500", industry: "حمل و نقل", location: "مشهد، ایران", employees: 800, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
  { id: 5, name: "تپسی", logo: "/logo5.jpg", color: "bg-orange-500", industry: "حمل و نقل", location: "کرج، ایران", employees: 600, description: "لورم ایپسوم متن ساختگی...", isPrivate: false },
  { id: 6, name: "ایرانسل", logo: "/logo6.png", color: "bg-yellow-400", industry: "تجارت الکترونیک", location: "تهران، ایران", employees: 2500, description: "لورم ایپسوم متن ساختگی...", isPrivate: false },
  { id: 7, name: "دیجی‌کالا", logo: "/logo7.jpg", color: "bg-red-500", industry: "تجارت الکترونیک", location: "تهران، ایران", employees: 3000, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
  { id: 8, name: "جابینجا", logo: "/logo8.png", color: "bg-cyan-500", industry: "برنامه نویسی", location: "تهران، ایران", employees: 150, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
  { id: 9, name: "دیوار", logo: "/logo9.png", color: "bg-red-700", industry: "تجارت الکترونیک", location: "تهران، ایران", employees: 400, description: "لورم ایپسوم متن ساختگی...", isPrivate: true },
];

export const industriesList = [
  "هوش مصنوعی", "برنامه نویسی", "هوافضا", "ارز دیجیتال", "حسابداری",
  "گرافیک", "رسانه‌ها", "پزشکی", "موسیقی", "بیوتکنولوژی",
  "تجارت الکترونیک", "علمی", "فیلم و سینما", "حمل و نقل"
];
export const popularCompaniesData = [
  {
    id: 1,
    name: "شرکت اسنپ",
    industry: "تجارت الکترونیک",
    logoLetter: "/popular4.png",
    logoColor: "bg-green-500",
    image: "/Button1.png",
    location: "تهران، ایران",
    rating: "۴",
    investorsCount: "۳۹۸",
    investorsAmount: "۲۱,۳۹۴",
    description: "از درخواست خودرو گرفته تا سفارش غذا، خرید بلیط سفر، مشاوره پزشکی و ران...",
  },
  {
    id: 2,
    name: "شرکت دیجی کالا",
    industry: "تجارت الکترونیک",
    logoLetter: "/popular3.png",
    logoColor: "bg-red-500",
    image: "/Button2.png",
    location: "تهران، ایران",
    rating: "۳",
    investorsCount: "۴۲۲",
    investorsAmount: "۲۵,۱۲۰",
    description: "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع موبایل، لب تاپ، لباس...",
  },
  {
    id: 3,
    name: "کارگزاری فارابی",
    industry: "تجارت الکترونیک",
    logoLetter: "/popular2.jpg",
    logoColor: "bg-teal-600",
    image: "/Button3.png",
    location: "تهران، ایران",
    rating: "۲",
    investorsCount: "۳۹۲",
    investorsAmount: "۲۹,۱۲۶",
    description: "کارگزاری بورس خدمات مالی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات در...",
  },
  {
    id: 4,
    name: "شرکت علی بابا",
    industry: "تجارت الکترونیک",
    logoLetter: "/popular.png",
    logoColor: "bg-yellow-500",
    image: "/Button4.png",
    location: "تهران، ایران",
    rating: "۵",
    investorsCount: "۲۳۲۴",
    investorsAmount: "۲۶,۷۵۰",
    description: "علی‌بابا بزرگترین و از هیجان‌انگیزترین پلتفرم‌های خرید بلیط (توسعه تکنولوژی سفر) است؛ سامانه‌ای که به واسطه پشتیبانی...",
  }
];
export const jobOpportunitiesData = [
  {
    id: 1,
    companyName: "بلو بانک",
    jobsCount: "۱۲ فرصت شغلی",
    logoText: "/op5.png",
    logoColor: "text-blue-600",
    logoBg: "bg-white",
    link: "/jobs/blubank",
  },
  {
    id: 2,
    companyName: "آسیاتک",
    jobsCount: "۱۶ فرصت شغلی",
    logoText: "/op4.png",
    logoColor: "text-red-600",
    logoBg: "bg-white",
    link: "/jobs/asiatech",
  },
  {
    id: 3,
    companyName: "کارگزاری فارابی",
    jobsCount: "۱۱ فرصت شغلی",
    logoText: "/op3.png",
    logoColor: "text-teal-700",
    logoBg: "bg-white",
    link: "/jobs/farabi",
  },
  {
    id: 4,
    companyName: "بیمه بازار",
    jobsCount: "۱۴ فرصت شغلی",
    logoText: "/op2.png",
    logoColor: "text-blue-800",
    logoBg: "bg-white",
    link: "/jobs/bimehbazar",
  },
  {
    id: 5,
    companyName: "گروه علی بابا",
    jobsCount: "۱۸ فرصت شغلی",
    logoText: "/op.png",
    logoColor: "text-yellow-500",
    logoBg: "bg-white",
    link: "/jobs/alibaba",
  },
  {
    id: 6,
    companyName: "دیجی کالا",
    jobsCount: "۲۲ فرصت شغلی",
    logoText: "/popular4.png",
    logoColor: "text-red-500",
    logoBg: "bg-white",
    link: "/jobs/digikala",
  },
  {
    id: 7,
    companyName: "اسنپ",
    jobsCount: "۲۵ فرصت شغلی",
    logoText: "S",
    logoColor: "text-green-500",
    logoBg: "bg-white",
    link: "/jobs/snapp",
  },
];
export const latestNewsData = [
  {
    id: 1,
    category: "تجارت الکترونیک",
    title: "اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست",
    description: "در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو را زد. این رکورد در روز...",
    image: "/news3.png",
    authorName: "فرهاد رئوفی",
    authorAvatar: "https://i.pravatar.cc/150?img=12",
    date: "۱۴۰۲/۱۲/۱۱",
  },

  {
    id: 2,
    category: "تجارت الکترونیک",
    title: "بار دیگر اسنپ فود به دلیل مشکل فنی از دسترس خارج شد",
    description: "بار دیگر اسنپ‌فود به دلیل مشکل فنی از دسترس کاربران خارج شد. این مشکل اوایل همین هفته نیز تکرار شده بود و رفع آن ساعاتی...",
    image: "/news2.png",
    authorName: "امیر بختیاری",
    authorAvatar: "https://i.pravatar.cc/150?img=11",
    date: "۱۴۰۲/۱۲/۰۵",
  },
  {
    id: 3,
    category: "تجارت الکترونیک",
    title: "رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد: ثبت ۲ خدمت در هر ثانیه",
    description: "با نزدیکی به سال نو و افزایش سفرهای بین شهری، رکورد ثبت سفارش آنلاین خدمات گردشگری شکسته شد.",
    image: "/news.png",
    authorName: "آتوسا صفوی زاده",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    date: "۱۴۰۲/۱۲/۱۳",
  },

];
export const latestEventsData = [
    {
    id: 1,
    title: "بوت کمپ برنامه نویسی دیجی کالا",
    description: "در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب دیجی‌کالا، بوزان و...",
    image: "/digi.png",
    location: "تهران، ایران",
    date: "۲۹ بهمن",
    curveColor: "border-yellow-400",
  },
  {
    id: 2,
    title: "سکوی پرتاب غزال",
    description: "سکوی پرتاب غزال، ۲۷ دی ماه سال جاری با هدف شناسایی تیم‌ها و سرمایه‌گذاری بر استارتاپ...",
    image: "/digi2.png",
    location: "تهران، ایران",
    date: "۲۷ دی",
    curveColor: "border-yellow-400",
  },

    {
    id: 3,
    title: "سکوی پرتاب قزوین",
    description: "ویداد تخصصی سرمایه‌گذاری سکوی پرتاب قزوین با هدف شناسایی تیم‌ها و سرمایه‌گذاری...",
    image: "/digi3.png",
    location: "قزوین، ایران",
    date: "۲۴ آبان",
    curveColor: "border-yellow-400",
  },

  {
    id: 4,
    title: "فراخوان جذب ایده و استارتاپ",
    description: "در حاشیه همایش معدن‌کاری دیجیتال ۱۴۰۱، خانه خلاق و نوآوری دنیای اقتصاد با همکاری...",
    image: "/digi4.png",
    location: "تهران، ایران",
    date: "۲۲ شهریور",
    curveColor: "border-yellow-400",
  },


];
export const footerColumns = [
  {
    title: "کانسپتو",
    links: ["درباره ما", "تماس با ما", "اتاق خبر", "قوانین و مقررات"]
  },
  {
    title: "خدمات مشتریان",
    links: ["حساب کاربری", "سوالات متداول", "راهنمای کار با سایت", "گزارش باگ"]
  },
  {
    title: "پیشنهاد کانسپتو",
    links: ["لیست استارتاپ های ایرانی", "ارزش گذاری استارتاپ", "ایده های استارتاپی", "محبوب ترین شرکت ها"]
  }
];