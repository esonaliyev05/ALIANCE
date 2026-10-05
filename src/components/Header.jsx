import React from 'react';
import { Hourglass, Award, ShieldCheck, Truck, Gauge } from 'lucide-react';

const Header = () => {
  const features = [
    {
      icon: <Hourglass className="w-7 h-7 text-blue-500 mb-2" />,
      title: "Непрерывная работа с 2017 года",
    },
    {
      icon: <Award className="w-7 h-7 text-blue-500 mb-2" />,
      title: "Вся продукция сертифицирована",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-500 mb-2" />,
      title: "Контроль качества на всех этапах",
    },
    {
      icon: <Truck className="w-7 h-7 text-blue-500 mb-2" />,
      title: "Возможны поставки по всей России",
    },
    {
      icon: <Gauge className="w-7 h-7 text-blue-500 mb-2" />,
      title: "Оперативное производство",
    },
  ];

  return (
    <header 
      className="relative w-full h-[100vh] bg-cover bg-center text-white flex flex-col justify-between overflow-hidden" 
      style={{ backgroundImage: "url('src/assets/Group 31.png')" }}
    >
      {/* Qorong'u overlay (fon ustidagi qatlam) */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Asosiy kontent - pt-20 (Fixed Navbar uchun joy ajratilgan) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pt-20 pb-6 flex-1 flex flex-col justify-center items-start">
        {/* Ko'k chiziqcha */}
        <div className="w-12 h-[3px] bg-blue-500 mb-4"></div>

        {/* Bosh sarlavha */}
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide leading-tight max-w-4xl mb-4">
          Комплексное обеспечение товарами и расходными материалами бизнеса
        </h1>

        {/* Tavsif matni */}
        <p className="text-gray-300 text-xs md:text-sm max-w-xl mb-6 leading-relaxed">
          Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от анализа существующих паттернов поведения.
        </p>

        {/* Tugma */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-sm transition duration-300 shadow-lg text-sm">
          Подробнее о компании
        </button>
      </div>

      {/* Pastki qismdagi xususiyatlar (Features) bloklari */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {features.map((item, index) => (
            <div key={index} className="p-4 flex flex-col items-start hover:bg-white/5 transition duration-300">
              {item.icon}
              <p className="text-xs text-gray-200 font-medium leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;