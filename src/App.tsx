/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useRef } from 'react';

// Premium imagery
const IMAGES = {
  logo: 'https://lh3.googleusercontent.com/d/14d_RFUmAEky4-mvbqkaY6vdketQ4ELit',
  heroBg: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  product: 'https://lh3.googleusercontent.com/d/1AP_X-uJion4UFHVifIJam-eMnejCULgA',
  ingredients: 'https://lh3.googleusercontent.com/d/1HzWdhi68Gt-ecHGGLKbPT3tHAMZLurbE',
  founder: 'https://lh3.googleusercontent.com/d/1joAKvroadFeT0lCsU2ykkhchyD-WbDuQ',
  manager: 'https://lh3.googleusercontent.com/d/1pk8_chAholmtC_80XfFM0deYly2R8bXL'
};

const TESTIMONIALS = [
  "https://lh3.googleusercontent.com/d/1vz5UIa2ilcYCcrBmFnyn0gdWde3F4CTb",
  "https://lh3.googleusercontent.com/d/1ZA5qWPoAk_aDXQCHPDMES4J8_Dzl3GY3",
  "https://lh3.googleusercontent.com/d/1bDLQ08Shx_HMz2cjBcr5r5cDKpoifna3",
  "https://lh3.googleusercontent.com/d/1sZ4ssxq80XT8Z_JEUEwMkKqhv4mcnujp",
  "https://lh3.googleusercontent.com/d/1deEdyp6pdz1FIjPQh60JCEhazAnRQQap",
  "https://lh3.googleusercontent.com/d/1zJJ2jpM1WyU2xFGz_JCyOEUZ2Yaeo3IV",
  "https://lh3.googleusercontent.com/d/1Oo6uDIlhwoVARMFP6O8xpaSzsSFj3O8-"
];

const SwipeIndicator = () => (
  <motion.div 
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 z-50 text-floral-gold"
  >
    <span className="text-xs mb-1 font-medium tracking-widest uppercase">بکشید</span>
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="text-floral-light antialiased bg-floral-bg font-sans selection:bg-floral-gold selection:text-floral-dark">
      <div className="snap-container" id="container" ref={containerRef}>
        
        {/* Slide 1: Hero */}
        <section className="slide relative">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral-dark to-floral-bg">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-floral-gold/10 via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="relative z-10 flex flex-col items-center justify-center w-full max-w-md mx-auto text-center px-6"
          >
            <motion.div variants={fadeUp} className="w-48 h-48 mb-6 flex items-center justify-center drop-shadow-2xl">
              <img src={IMAGES.logo} alt="Floral Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="font-bold text-3xl text-gradient mb-6 drop-shadow-2xl">لوازم آرایشی ارگانیک فلورال</motion.h1>
            
            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="text-xl font-bold text-floral-gold mb-2">فلورال؛ بوسه طبیعت بر چهره‌ات</h2>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 2: Philosophy */}
        <section className="slide relative px-6">
           <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto h-full flex flex-col justify-center"
          >
            <motion.div variants={fadeUp} className="mb-8 relative rounded-2xl overflow-hidden h-48 shadow-2xl">
               <img src={IMAGES.ingredients} className="w-full h-full object-cover" alt="Organic ingredients" />
            </motion.div>

            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-floral-gold/10 border border-floral-gold/30 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-floral-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-gradient">چرا ارگانیک؟</h2>
            </motion.div>
            
            <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl relative">
              <p className="text-sm text-justify-custom text-floral-light/90 font-light mb-5">
                  امروزه آگاهی مصرف‌کنندگان به اوج خود رسیده است. دیگر جایی برای مواد شیمیایی مضر در روتین روزانه نیست. همه به دنبال جایگزین‌های ایمن، طبیعی و سازگار با بدن هستند.
              </p>
              <div className="border-r-2 border-floral-gold pr-4">
                <p className="text-sm font-bold text-white leading-loose">
                    پاسخ ما به این عطش بازار، محصولاتی با بالاترین خلوص طبیعی و کارایی خیره‌کننده است. بازاری بکر با مشتریانی وفادار.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 3: The Story */}
        <section className="slide relative px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gradient mb-3">داستان فلورال</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative pl-4 border-r border-floral-gold/30 space-y-8 pr-6">
              
              <div className="relative">
                <div className="absolute w-3 h-3 bg-floral-gold rounded-full -right-[29.5px] top-1 shadow-[0_0_10px_rgba(197,160,89,0.8)]"></div>
                <h3 className="text-lg font-bold text-white mb-2">جرقه اولیه</h3>
                <p className="text-xs text-floral-light/80 text-justify-custom leading-loose">
                  همه چیز از تلاش برای یک زندگی سالم شروع شد. دغدغه یافتن محصولاتی بدون عوارض جانبی، مرا به سمت یادگیری تخصصی فرمولاسیون ارگانیک کشاند.
                </p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-floral-gold rounded-full -right-[29.5px] top-1 shadow-[0_0_10px_rgba(197,160,89,0.8)]"></div>
                <h3 className="text-lg font-bold text-white mb-2">تحقیق و توسعه (R&D)</h3>
                <p className="text-xs text-floral-light/80 text-justify-custom leading-loose">
                  دو سال تلاش شبانه‌روزی برای خلق فرمول‌هایی پایدار، موثر و بی‌رقیب. استقبال اولیه فراتر از حد تصور بود.
                </p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-floral-gold rounded-full -right-[29.5px] top-1 shadow-[0_0_10px_rgba(197,160,89,0.8)]"></div>
                <h3 className="text-lg font-bold text-white mb-2">تولد یک برند</h3>
                <p className="text-xs text-floral-light/80 text-justify-custom leading-loose">
                  امروز فلورال یک شرکت ثبت‌شده با تیمی متخصص است که آماده برداشتن گام نهایی برای تولید صنعتی و تسخیر بازار است.
                </p>
              </div>

            </motion.div>
            
            <motion.div variants={fadeUp} className="mt-12 flex justify-end w-full">
              <div className="text-left opacity-90 pl-2">
                <p className="text-floral-gold font-bold text-sm tracking-wide">زینب خلیلیان</p>
                <p className="text-[10px] text-floral-light/60 font-light tracking-widest mt-1">بنیان‌گذار و فرمولاتور</p>
              </div>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 4: Traction */}
        <section className="slide relative px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-3">اعتبارسنجی بازار</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
              <p className="mt-4 text-sm font-light text-floral-light/60">آماری که کیفیت ما را فریاد می‌زند</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-5xl font-sans font-light text-white mb-2">۹۸<span className="text-2xl text-floral-gold">%</span></span>
                <span className="text-xs font-bold tracking-wide">رضایت مشتریان</span>
                <span className="text-[10px] text-floral-light/50 mt-2">در یک سال اخیر</span>
              </motion.div>
              
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl text-center flex flex-col items-center justify-center">
                <span className="text-5xl font-sans font-light text-white mb-2">۸۰<span className="text-2xl text-floral-gold">%</span></span>
                <span className="text-xs font-bold tracking-wide">نرخ بازگشت</span>
                <span className="text-[10px] text-floral-light/50 mt-2">۸ از هر ۱۰ نفر</span>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUp} className="glass-panel p-5 rounded-2xl flex items-center justify-between border-r-2 border-floral-gold mt-4">
              <div className="text-right pl-4">
                <h4 className="font-bold text-sm text-white mb-1">مشتریان وفادار ماهانه</h4>
                <p className="text-[11px] text-floral-light/70 leading-loose">حداقل ۱۰ مشتری ثابت با خرید مستمر ۱۵ الی ۲۰ محصول در هر ماه.</p>
              </div>
              <div className="bg-gradient-to-br from-floral-gold to-[#9a782b] text-white rounded-xl w-16 h-16 shrink-0 flex items-center justify-center font-bold text-2xl shadow-lg">
                +۱۰
              </div>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 5: Hero Product */}
        <section className="slide relative px-6">
          <div className="absolute inset-0 z-0 opacity-20">
             <img src={IMAGES.product} className="w-full h-full object-cover" alt="Background" />
             <div className="absolute inset-0 bg-floral-dark/80 backdrop-blur-sm"></div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto relative z-10"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gradient mb-3">محصول پیشتاز</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden shadow-2xl mb-8 relative border border-floral-gold/20">
              <img src={IMAGES.product} className="w-full h-64 object-cover" alt="Hero Product" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">ژل ابروی ارگانیک</h3>
                  <p className="text-floral-gold text-xs tracking-wide">آماده تسخیر داروخانه‌ها و گالری‌ها</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-floral-gold rounded-full shrink-0"></div>
                  <span className="text-sm text-floral-light/90">فرمولاسیون کاملاً طبیعی و انحصاری</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-floral-gold rounded-full shrink-0"></div>
                  <span className="text-sm text-floral-light/90">ماندگاری خیره‌کننده در طول روز</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-floral-gold rounded-full shrink-0 shadow-[0_0_8px_#c5a059]"></div>
                  <span className="text-sm font-bold text-white">بدون ایجاد کوچکترین سفیدک</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-floral-gold rounded-full shrink-0"></div>
                  <span className="text-sm text-floral-light/90">تقویت‌کننده و بدون آسیب به فولیکول مو</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 6: Social Proof / Testimonials */}
        <section className="slide relative px-0">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto flex flex-col h-full justify-center"
          >
            <motion.div variants={fadeUp} className="text-center mb-8 shrink-0 px-6">
              <h2 className="text-3xl font-bold text-gradient mb-3">صدای مشتریان</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative w-full overflow-hidden" dir="ltr">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full pb-8 pt-4 px-8 items-center no-scrollbar">
                {TESTIMONIALS.map((src, idx) => (
                  <div key={idx} className="snap-center shrink-0 w-[75%] aspect-[9/16] flex justify-center items-center rounded-2xl relative shadow-2xl shadow-black/50">
                    <img src={src} alt={`Review ${idx + 1}`} className="w-full h-full object-cover rounded-2xl border border-floral-light/10" loading="lazy" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="text-center shrink-0 mt-2 px-6">
              <p className="text-xs text-floral-light/50">به چپ و راست بکشید</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Slide 7: Financials */}
        <section className="slide relative px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-3">منطق مالی و سودآوری</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <div className="space-y-10">
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl">
                <div className="flex justify-between items-end mb-4">
                  <span className="font-bold text-sm text-floral-light/80">تولید فعلی (کارگاهی)</span>
                  <span className="text-2xl font-light text-white">۱۰۰٪</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: '50%' }} transition={{ duration: 1, delay: 0.5 }}
                    className="bg-floral-light/40 h-full rounded-full"
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl border border-floral-gold/50 shadow-[0_0_30px_rgba(197,160,89,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-floral-gold/5"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-4">
                    <span className="font-bold text-base text-white">تولید صنعتی انبوه</span>
                    <span className="text-4xl font-light text-floral-gold">۲۰۰٪</span>
                  </div>
                  <div className="w-full bg-black/50 rounded-full h-4 overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }} whileInView={{ width: '90%' }} transition={{ duration: 1, delay: 0.8 }}
                      className="bg-gradient-to-r from-[#9a782b] to-floral-gold h-full rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUp} className="mt-8 text-center p-6 border-t border-floral-light/10">
              <p className="text-sm font-bold text-white mb-2">جهش فوق‌العاده در بازگشت سرمایه</p>
              <p className="text-xs leading-loose text-floral-light/60">
                  کاهش شدید قیمت تمام‌شده مواد اولیه در خریدهای تناژ و بسته‌بندی صنعتی، حاشیه سود را به طور چشمگیری افزایش خواهد داد.
              </p>
            </motion.div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 8: Business Models */}
        <section className="slide relative px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gradient mb-3">مسیرهای همکاری</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <div className="space-y-6">
              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl border-r-4 border-r-floral-gold">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-floral-gold/20 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-floral-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">تولید ظرفیت خالی <span className="block text-xs font-normal text-floral-gold/80 mt-1">(Toll Mfg)</span></h3>
                </div>
                <p className="text-sm text-floral-light/70 leading-loose text-justify-custom font-light">
                    تولید قراردادی فرمولاسیون بی‌نظیر فلورال در کارخانجات معتبر جهت بهره‌برداری سریع و ورود قدرتمند به بازار زنجیره‌ای.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-panel p-6 rounded-2xl border-r-4 border-r-white/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">سرمایه‌گذاری مشترک <span className="block text-xs font-normal text-white/50 mt-1">(Joint Venture)</span></h3>
                </div>
                <p className="text-sm text-floral-light/70 leading-loose text-justify-custom font-light">
                    تجهیز کارگاه صنعتی اختصاصی، اخذ سریع سیب سلامت و اجرای کمپین‌های توسعه توزیع سراسری با سهم‌الشرکه توافقی.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <SwipeIndicator />
        </section>

        {/* Slide 9: Contact & Team */}
        <section className="slide relative px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={stagger}
            className="w-full max-w-md mx-auto"
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gradient mb-3">تیم و ارتباط</h2>
              <div className="w-12 h-[2px] bg-floral-gold mx-auto"></div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-floral-gold/50 shadow-xl">
                  <img src={IMAGES.founder} alt="زینب خلیلیان" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-sm text-white">زینب خلیلیان</h3>
                <p className="text-[10px] text-floral-gold mt-1">بنیان‌گذار و فرمولاتور</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-white/20 shadow-xl">
                  <img src={IMAGES.manager} alt="مسعود شاهقلی" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-sm text-white">مسعود شاهقلی</h3>
                <p className="text-[10px] text-white/60 mt-1">مدیر توسعه برند</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <a href="tel:09332511889" className="w-full flex items-center justify-between px-5 bg-floral-gold text-floral-dark py-4 rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(197,160,89,0.3)] transition-transform active:scale-95">
                <span className="flex items-center">
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  تماس مستقیم تلفنی
                </span>
                <span dir="ltr" className="tracking-widest">0933 251 1889</span>
              </a>
              
              <a href="sms:09332511889?body=سلام،%20من%20در%20خصوص%20همکاری%20تجاری%20با%20برند%20فلورال%20پیام%20می‌دهم." className="w-full flex items-center justify-between px-5 bg-white/10 hover:bg-white/15 text-white py-4 rounded-xl font-bold text-sm border border-white/10 transition-transform active:scale-95">
                <span className="flex items-center">
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  ارسال پیامک مستقیم (آفلاین و سریع)
                </span>
                <span className="text-xs font-normal text-floral-gold">پیشنهادی</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a href="https://eitaa.com/floraliran" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center glass-panel py-4 rounded-xl transition-transform active:scale-95 border-none bg-orange-600/10 hover:bg-orange-600/20 animate-fade-in">
                  <span className="text-[10px] text-orange-400 mb-1 font-bold">پیام در ایتا (بدون فیلترشکن)</span>
                  <span className="font-bold text-sm text-white" dir="ltr">@floraliran</span>
                </a>
                
                <a href="https://wa.me/989332511889?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%D9%86%20%D8%AF%D8%B1%20%DD%AE%D8%B5%D9%88%D8%B5%20%D9%87%D9%85%DA%A9%D8%A7%D8%B1%DB%8C%20%D8%AA%D8%AC%D8%A7%D8%B1%DB%8C%20%D8%A8%D8%A7%20%D8%A8%D8%B1%D9%86%D8%AF%20%D9%81%D9%84%D9%88%D8%B1%D8%A7%D9%84%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center glass-panel py-4 rounded-xl transition-transform active:scale-95 border-none bg-green-600/10 hover:bg-green-600/20">
                  <span className="text-[10px] text-green-400 mb-1 font-bold">واتساپ (نیاز به VPN)</span>
                  <span className="font-bold text-sm text-white" dir="ltr">0933 251 1889</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a href="https://t.me/floraliran" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center glass-panel py-4 rounded-xl transition-transform active:scale-95 border-none bg-sky-600/10 hover:bg-sky-600/20">
                  <span className="text-[10px] text-sky-400 mb-1 font-bold">پیام در تلگرام (نیاز به VPN)</span>
                  <span className="font-bold text-sm text-white" dir="ltr">@floraliran</span>
                </a>

                <a href="https://instagram.com/floraliran" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center glass-panel py-4 rounded-xl transition-transform active:scale-95 border-none bg-pink-600/10 hover:bg-pink-600/20">
                  <span className="text-[10px] text-pink-400 mb-1 font-bold">اینستاگرام رسمی</span>
                  <span className="font-bold text-sm text-white" dir="ltr">@floraliran</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}

