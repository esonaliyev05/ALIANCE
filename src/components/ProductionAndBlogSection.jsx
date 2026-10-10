import React from 'react';
// Swiper React komponentlari va CSS fayllari
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Lucide ikonalar
import { 
  FlaskConical, 
  Car, 
  Shirt, 
  Utensils, 
  Footprints, 
  Paintbrush, 
  Building2, 
  Sparkles, 
  MoreHorizontal,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

const ProductionAndBlogSection = () => {
  // 1-qism: Sferalar ro'yxati
  const industries = [
    { title: "Химические производства", icon: FlaskConical },
    { title: "Автомобильная косметика", icon: Car },
    { title: "Автомойки", icon: Car },
    { title: "Косметика по уходу за одеждой", icon: Shirt },
    { title: "Пищевая продукция", icon: Utensils },
    { title: "Косметика по уходу за обувью", icon: Footprints },
    { title: "Лаки и краски", icon: Paintbrush },
    { title: "Строительные материалы", icon: Building2 },
    { title: "Косметические средства", icon: Sparkles },
    { title: "И многих других", icon: MoreHorizontal }
  ];

  // Logotiplar ro'yxati (3x3 grid)
  const partnerLogos = [
    { id: 1, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 1" },
    { id: 2, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 2" },
    { id: 3, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 3" },
    { id: 4, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 4" },
    { id: 5, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 5" },
    { id: 6, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 6" },
    { id: 7, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 7" },
    { id: 8, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 8" },
    { id: 9, img: "src/assets/home-imags/Burger_King_logo_(1999) 1.png", alt: "Burger King 9" }
  ];

  // Blog maqolalari
  const blogPosts = [
    {
      id: 1,
      title: "Современная методология разработки одухотворила всех причастных",
      desc: "Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...",
      img: "src/assets/home-imags/bd8483f914f4821cb4da55404378f8385c735450.jpg"
    },
    {
      id: 2,
      title: "Сложно сказать, почему жизнь прекрасна",
      desc: "Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...",
      img: "src/assets/home-imags/f1a3baf781f6cdbbe7384ff0e254e1b151f02849.jpg"
    },
    {
      id: 3,
      title: "Инновационные решения в сфере аэрозольного производства",
      desc: "Повседневная практика показывает, что укрепление и развитие внутренней структуры говорит о широком спектре возможностей...",
      img: "src/assets/home-imags/f1a3baf781f6cdbbe7384ff0e254e1b151f02849.jpg"
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] py-10 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans text-[#2B2B2B]">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* ========================================== */}
        {/* 1-QISM: ПРОИЗВОДИМ АЭРОЗОЛЬНУЮ ПРОДУКЦИЮ */}
        {/* ========================================== */}
        <section>
          <div className="w-16 sm:w-20 h-[3px] bg-[#5B92E5] mb-6 sm:mb-8"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1E1E1E] uppercase mb-8 sm:mb-12 leading-tight">
            Производим аэрозольную <br className="hidden sm:block" />
            продукцию для разных сфер
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Chap tomon: Sferalar ro'yxati */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4">
              {industries.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-[#5B92E5] shrink-0" strokeWidth={1.5} />
                    <span className="text-xs sm:text-sm text-gray-700 font-normal leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* O'ng tomon: Logotiplar gridi (3x3) */}
            <div className="lg:col-span-7 grid grid-cols-3 border-t border-l border-gray-200 bg-white">
              {partnerLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="h-24 sm:h-28 border-r border-b border-gray-200 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 group cursor-pointer relative hover:bg-gray-50"
                >
                  <img 
                    src={logo.img} 
                    alt={logo.alt} 
                    className="max-h-10 sm:max-h-12 max-w-[70px] sm:max-w-[80px] object-contain transition-all duration-300 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* 2-QISM: БЛОГ ЭКСПЕРТОВ В ОБЛАСТИ ПРОИЗВОДСТВА */}
        {/* ========================================== */}
        <section>
          <div className="w-16 sm:w-20 h-[3px] bg-[#5B92E5] mb-6 sm:mb-8"></div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1E1E1E] uppercase leading-tight">
              Блог экспертов в области производства
            </h2>
            
            <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
              <button 
                id="blog-prev-btn" 
                className="w-10 h-10 sm:w-12 sm:h-10 bg-[#5B92E5] text-white flex items-center justify-center hover:bg-[#4A81D4] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button 
                id="blog-next-btn" 
                className="w-10 h-10 sm:w-12 sm:h-10 bg-[#5B92E5] text-white flex items-center justify-center hover:bg-[#4A81D4] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next slide"
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '#blog-prev-btn',
                nextEl: '#blog-next-btn',
              }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 24 },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="w-full"
            >
              {blogPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <div className="relative h-[320px] sm:h-[380px] overflow-hidden group cursor-pointer rounded-sm">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-normal leading-snug mb-2 sm:mb-3">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 font-light line-clamp-2 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#5B92E5]"></span>
            <a 
              href="#blog" 
              className="text-[#5B92E5] text-sm font-medium hover:underline tracking-wide"
            >
              Весь блог
            </a>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProductionAndBlogSection;