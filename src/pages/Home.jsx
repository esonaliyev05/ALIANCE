import React from 'react'
import Header from '../components/Header'
import Production from '../components/Production'
import WorkProcess from '../components/WorkProcess'
import ProductionAndBlogSection from '../components/ProductionAndBlogSection'
import CooperationSection from '../components/CooperationSection'


const Home = () => {
  return (
    <>
      <Header />
      <WorkProcess />
      <Production />

      <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <div className="w-full lg:w-1/2">
            <img
              src="src/assets/home-imags/pexels-tiger-lily-4483938 1.png"
              alt="Otnosheniye k delu i klientam"
              className="w-full h-[400px] sm:h-[500px] object-cover shadow-md"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-900 uppercase mb-6 leading-tight">
              Отношение к делу <br />
              и к клиентам
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
              Кстати, интерактивные прототипы описаны максимально подробно. Повседневная практика показывает, что укрепление и развитие внутренней структуры говорит о возможностях соответствующих условий активизации. Внезапно, независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований. С учётом сложившейся международной обстановки, синтетическое тестирование выявляет срочную потребность системы массового участия.
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
              А ещё действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе. Не следует, однако, забывать, что выбранный нами инновационный путь в значительной степени обусловливает важность дальнейших направлений развития.
            </p>

            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              <a
                href="#more"
                className="text-blue-500 text-sm sm:text-base font-medium hover:underline tracking-wide"
              >
                Подробнее о компании
              </a>
            </div>

          </div>

        </div>
      </div>

      <ProductionAndBlogSection/>
      <CooperationSection/>

    </>
  )
}

export default Home