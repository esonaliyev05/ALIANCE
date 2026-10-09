import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 font-sans bg-white selection:bg-blue-100">
      <h1 className="text-[140px] sm:text-[180px] font-extralight text-[#5C93ED] leading-none mb-2 tracking-tight select-none">
        404
      </h1>

      <h2 className="text-xl sm:text-2xl font-normal text-gray-800 mb-3">
        Страница не найдена
      </h2>

      <p className="text-sm text-gray-500 max-w-md mb-8 leading-relaxed">
        Мы не смогли найти страницу с таким адресом, попробуйте <br className="hidden sm:inline" />
        перейти на главную или напишите нам.
      </p>

      <a
        href="/"
        className="bg-[#5C93ED] hover:bg-[#4a82dc] text-white px-8 py-3 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
      >
        Вернуться на главную
      </a>
    </div>
  );
};

export default NotFound;