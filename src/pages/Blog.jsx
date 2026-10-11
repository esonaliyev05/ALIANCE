import { useEffect, useRef, useState } from 'react';
import blog1 from "../assets/blog-imags/blog1.png";
import blog2 from "../assets/blog-imags/blog2.png";
import blogsprey from "../assets/blog-imags/blog3.png";

// ==========================================
// 1. SCROLL ANIMATSIYASI UCHUN KICHIK KOMPONENT
// ==========================================
const Reveal = ({ children, delay = 0, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const directionClass = {
    left: '-translate-x-12',
    right: 'translate-x-12',
    up: 'translate-y-12',
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClass}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// ==========================================
// 2. BLOG KARTOCHKASI KOMPONENTI
// ==========================================
const BlogCard = ({ image, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer h-[300px] md:h-[320px] shadow-lg">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {description}
        </p>
      </div>
    </div>
  );
};

// ==========================================
// 3. PAGINATION (SAHIFALASH) KOMPONENTI
// ==========================================
const Pagination = ({ currentPage = 1, totalPages = 5 }) => {
  return (
    <div className="flex justify-end items-center gap-2 mt-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`w-10 h-10 flex items-center justify-center border text-sm font-medium transition-colors duration-300 ${
            page === currentPage
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

// ==========================================
// 4. ALOQA FORMASI (CONTACT CTA) KOMPONENTI
// ==========================================
const ContactCTA = () => {
  return (
    <div className="relative bg-[#F4F5F7] mt-20 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={blogsprey}
              alt="Spray"
              className="w-48 md:w-64 lg:w-[580px] object-contain drop-shadow-2xl animate-float"
            />
          </div>

          {/* Forma qismi */}
          <div className="w-full md:w-2/3 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
              ХОТИТЕ СОТРУДНИЧАТЬ?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-lg">
              Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможет даже в самых сложных случаях!
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors bg-white/50"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors bg-white/50"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3 bg-[#5B8DEF] hover:bg-blue-600 text-white font-medium rounded transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-gray-500 max-w-xs text-center sm:text-left">
                  <span className="inline-block mr-1 text-blue-500">ⓘ</span> Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. ASOSIY BLOG SAHIFASI
// ==========================================
const Blog = () => {
  // Ma'lumotlar (keyinchalik API dan olinishi mumkin)
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      title: 'Сложно сказать, почему жизнь прекрасна',
      description: 'Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...',
    },
    {
      id: 2,
      image:blog2,
      title: 'Современная методология разработки одухотворила всех причастных',
      description: 'Действия представителей оппозиции, превомогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...',
    },
    {
      id: 3,
      image: blog1,
      title: 'Современная методология разработки одухотворила всех причастных',
      description: 'Действия представителей оппозиции, превомогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...',
    },
    {
      id: 4,
      image: blog2,
      title: 'Сложно сказать, почему жизнь прекрасна',
      description: 'Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...',
    },
    {
      id: 5,
      image: blog1,
      title: 'Сложно сказать, почему жизнь прекрасна',
      description: 'Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...',
    },
    {
      id: 6,
      image: blog2,
      title: 'Современная методология разработки одухотворила всех причастных',
      description: 'Действия представителей оппозиции, превомогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...',
    },
    {
      id: 7,
      image: blog1,
      title: 'Современная методология разработки одухотворила всех причастных',
      description: 'Действия представителей оппозиции, превомогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...',
    },
    {
      id: 8,
      image: blog2,
      title: 'Сложно сказать, почему жизнь прекрасна',
      description: 'Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Sarlavha qismi */}
      <div className="bg-[#F8F9FA] border-b border-gray-200 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 mt-5">БЛОГ</h1>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>Главная</span>
            <span className="text-gray-300">—</span>
            <span className="text-gray-900">Блог</span>
          </div>
        </div>
      </div>

      {/* Blog Grid qismi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
              <BlogCard
                image={post.image}
                title={post.title}
                description={post.description}
              />
            </Reveal>
          ))}
        </div>

        {/* Pagination */}
        <Pagination currentPage={1} totalPages={5} />
      </div>

      {/* Contact CTA */}
      <Reveal direction="up" delay={200}>
        <ContactCTA />
      </Reveal>
    </div>
  );
};

export default Blog;