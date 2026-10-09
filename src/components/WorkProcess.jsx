import React from 'react';

const stepsData = [
  {
    id: '01',
    title: 'Знакомство',
    desc: 'Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.',
    linkText: 'Оставить заявку',
    linkHref: '#',
  },
  {
    id: '02',
    title: 'Заключение договора',
    desc: 'Лишь интерактивные прототипы призваны к ответу.',
  },
  {
    id: '03',
    title: 'Производство',
    desc: 'А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.',
  },
  {
    id: '04',
    title: 'Доставка',
    desc: 'В частности, экономическая повестка сегодняшнего дня говорит о возможностях приоритизации разума над эмоциями.',
  },
];

const WorkProcess = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-16">
      {/* Sarlavha va ko'k chiziq */}
      <div className="mb-8 sm:mb-12">
        <div className="w-12 sm:w-16 h-[2px] bg-[#5C93ED] mb-4 sm:mb-6"></div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wider text-gray-900">
          Схема работы
        </h2>
      </div>

      {/* Grid: Mobil (1 col) -> Planshet (2 col) -> Desktop (4 col) */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {/* Dekstop uchun fonga tushadigan chiziq */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gray-100 -z-10" />

        {stepsData.map((step) => (
          <div
            key={step.id}
            className="group flex flex-col items-start bg-white p-2 sm:p-0 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Raqam: Hover bo'lganda rangi to'yinadi */}
            <span className="text-4xl sm:text-5xl font-extralight text-[#5C93ED] group-hover:text-[#3b75d6] mb-4 sm:mb-6 inline-block bg-white pr-3 transition-colors duration-200">
              {step.id}
            </span>

            {/* Sarlavha */}
            <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#5C93ED] mb-2 sm:mb-3 transition-colors duration-200">
              {step.title}
            </h3>

            {/* Tavsif */}
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
              {step.desc}
            </p>

            {/* Havola va hoverda cho'ziluvchi chiziq */}
            {step.linkText && (
              <div className="mt-auto flex items-center space-x-2 pt-2">
                <span className="w-6 group-hover:w-8 h-[1px] bg-[#5C93ED] transition-all duration-300"></span>
                <a
                  href={step.linkHref}
                  className="text-xs text-[#5C93ED] hover:text-[#3b75d6] font-medium transition-colors"
                >
                  {step.linkText}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;