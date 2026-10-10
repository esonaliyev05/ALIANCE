import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CooperationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <section className="w-full bg-[#F4F6F8] relative min-h-[300px] py-16 lg:py-20 px-4 sm:px-6 lg:px-12 mt-32 overflow-visible">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-visible">
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative min-h-[300px] overflow-visible">
          <img
            src="src/assets/home-imags/__400 1.png"
            alt="AG Tech Spray Can"
            data-aos="fade-right"
            className="w-full max-w-[600px] object-contain lg:-translate-x-10 lg:-top-[130px] lg:absolute z-30 overflow-visible transition-transform"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1E1E] uppercase tracking-tight mb-4">
            ХОТИТЕ СОТРУДНИЧАТЬ?
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
            Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 bg-[#ECEFF2] text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#5B92E5] transition-all rounded-none"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-[#F4F6F8] px-1 text-[11px] text-[#5B92E5]">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 bg-[#ECEFF2] text-gray-800 placeholder-gray-400 text-sm border border-[#5B92E5] focus:outline-none transition-all rounded-none"
                />
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 h-12 bg-[#5B92E5] text-white text-sm font-medium hover:bg-[#4A81D4] active:scale-95 transition-all shrink-0"
              >
                Отправить заявку
              </button>

              <div className="flex items-start gap-2 text-gray-400 text-xs leading-tight max-w-xs">
                <ShieldCheck className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>
                  Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!
                </span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default CooperationSection;