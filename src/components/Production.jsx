import React from 'react';

import autoImg from '../assets/home-imags/5dd4c227c7dc6914837490 1.png';
import householdImg from '../assets/home-imags/0503577001614868834 1.png';
import disinfectImg from '../assets/home-imags/Без имени-2 1.png';

// import agTechLogo from '../assets/home-imags/agTechLogo.png'; 
// import apLogo from '../assets/home-imags/apLogo.png';        


import { agTechLogo, apLogo } from '../assets/images';

const productsData = [
  {
    id: 1,
    title: 'Автомобильная химия',
    desc: 'Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.',
    image: autoImg,
  },
  {
    id: 2,
    title: 'Бытовая химия',
    desc: 'А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.',
    image: householdImg,
  },
  {
    id: 3,
    title: 'Дезинфицирующие средства',
    desc: 'Лишь интерактивные прототипы призваны к ответу.',
    image: disinfectImg,
  },
  {
    id: 4,
    title: 'Пищевые аэрозоли',
    desc: 'Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.',
    image: householdImg,
  },
  {
    id: 5,
    title: 'Косметическая продукция',
    desc: 'Лишь интерактивные прототипы призваны к ответу.',
    image: autoImg,
  },
  {
    id: 6,
    title: 'Краски аэрозольные',
    desc: 'А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.',
    image: disinfectImg,
  },
];

const ownBrandsData = [
  {
    id: 1,
    title: 'Автохимия AG-Tech',
    desc: 'Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.',
    logo: agTechLogo,
  },
  {
    id: 2,
    title: 'Автохимия AP',
    desc: 'Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.',
    logo: apLogo,
  },
];

const Production = () => {
  return (
    <div className="space-y-20 my-10 sm:my-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-[2px] bg-[#5C93ED] mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wider text-gray-900">
            Контрактное производство
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-white border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:border-[#5C93ED] hover:shadow-xl hover:-translate-y-2"
            >
              <div>
                <h3 className="text-base sm:text-lg font-medium mb-3 text-gray-900 group-hover:text-[#5C93ED] transition-colors duration-200">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                  {product.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 flex justify-center items-end overflow-hidden h-48 sm:h-56">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain w-auto transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-[2px] bg-[#5C93ED] mb-4 sm:mb-6"></div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wider text-gray-900">
            Собственные торговые марки
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ownBrandsData.map((brand) => (
            <div
              key={brand.id}
              className="group flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-10 rounded-sm bg-white border border-gray-200 cursor-pointer transition-all duration-300 ease-out hover:border-[#5C93ED] hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-full sm:w-1/3 flex justify-center items-center shrink-0">
                <img
                  src={brand.logo}
                  alt={brand.title}
                  className="max-h-24 max-w-[140px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-medium mb-3 text-gray-900 group-hover:text-[#5C93ED] transition-colors duration-200">
                  {brand.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {brand.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Production;