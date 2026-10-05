import React from "react";
import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9] text-[#292d32] font-sans border-t border-[#e8e8e8]">
      {/* Yuqori qism: Logo va Kontaktlar */}
      <div className="max-w-[1250px] mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-6 border-b border-[#eeeeee]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline">
          <img
            src="src/assets/logo-dark.png"
            alt="Aliance Production"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Telefon raqami */}
        <a
          href="tel:+74996861014"
          className="text-[26px] md:text-[32px] font-bold text-[#292d32] no-underline hover:text-[#5289df] transition-colors"
        >
          +7 (499) 686-10-14
        </a>

        {/* Manzil */}
        <div className="flex items-center gap-2 text-xs text-[#292d32]">
          <MapPin className="w-4 h-4 text-[#5289df] shrink-0" />
          <span>г. Москва, Холодильный пер. 4к1с8</span>
        </div>

        {/* Email */}
        <a
          href="mailto:a.dragunov@tdaliance.ru"
          className="flex items-center gap-2 text-xs text-[#292d32] no-underline hover:text-[#5289df] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#5289df] shrink-0" />
          <span>a.dragunov@tdaliance.ru</span>
        </a>

        {/* Ijtimoiy tarmoqlar (VK & Instagram) */}
        <div className="flex items-center gap-3">
          <a
            href="https://vk.com"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#5289df] hover:opacity-80 transition-opacity"
            aria-label="VK"
          >
            <VkIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#5289df] hover:opacity-80 transition-opacity"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* O'rta qism: Linklar menyusi */}
      <div className="max-w-[1250px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1-ustun: Kontraktnoe proizvodstvo (Chap tomoni) */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-bold text-[#292d32] uppercase tracking-wider mb-5">
              Контрактное производство
            </h4>
            <ul className="space-y-3 p-0 m-0 list-none text-xs text-[#828a99]">
              <li>
                <a href="#automotive" className="hover:text-[#5289df] transition-colors no-underline">
                  Автомобильная химия
                </a>
              </li>
              <li>
                <a href="#household" className="hover:text-[#5289df] transition-colors no-underline">
                  Бытовая химия
                </a>
              </li>
              <li>
                <a href="#disinfection" className="hover:text-[#5289df] transition-colors no-underline">
                  Дезинфицирующие средства
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-0 sm:pt-[33px]">
            <ul className="space-y-3 p-0 m-0 list-none text-xs text-[#828a99]">
              <li>
                <a href="#food" className="hover:text-[#5289df] transition-colors no-underline">
                  Пищевые аэрозоли
                </a>
              </li>
              <li>
                <a href="#cosmetic" className="hover:text-[#5289df] transition-colors no-underline">
                  Косметическая продукция
                </a>
              </li>
              <li>
                <a href="#paint" className="hover:text-[#5289df] transition-colors no-underline">
                  Краски аэрозольные
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 2-ustun: Sobstvennye marki */}
        <div>
          <h4 className="text-xs font-bold text-[#292d32] uppercase tracking-wider mb-5">
            Собственные марки
          </h4>
          <ul className="space-y-3 p-0 m-0 list-none text-xs text-[#828a99]">
            <li>
              <a href="#ag-tech" className="hover:text-[#5289df] transition-colors no-underline">
                Автохимия AG-Tech
              </a>
            </li>
            <li>
              <a href="#ap" className="hover:text-[#5289df] transition-colors no-underline">
                Автохимия AP
              </a>
            </li>
          </ul>
        </div>

        {/* 3-ustun: Asosiy sahifalar */}
        <div>
          <ul className="space-y-4 p-0 m-0 list-none text-xs font-bold text-[#292d32]">
            <li>
              <a href="#about" className="hover:text-[#5289df] transition-colors no-underline">
                О компании
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-[#5289df] transition-colors no-underline">
                Новости
              </a>
            </li>
            <li>
              <a href="#contacts" className="hover:text-[#5289df] transition-colors no-underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Pastki qism: Mualliflik huquqi (Copyright) */}
      <div className="border-t border-[#eeeeee]">
        <div className="max-w-[1250px] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#a0a5b1] gap-4">
          <div>
            © 2022 «Aliance Production». Все права защищены.
          </div>
          <div>
            <a href="#privacy" className="hover:text-[#5289df] transition-colors no-underline">
              Политика конфиденциальности
            </a>
          </div>
          <div className="flex items-center gap-1">
            <span>Сделано в</span>
            <span className="font-bold text-[#292d32]">RUSO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const VkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.684 0H8.316C3.727 0 0 3.727 0 8.316v7.368C0 20.273 3.727 24 8.316 24h7.368C20.273 24 24 20.273 24 15.684V8.316C24 3.727 20.273 0 15.684 0zm3.692 17.123h-1.644c-.624 0-.816-.495-1.939-1.619-1.123-1.096-1.619-1.233-1.89-1.233-.384 0-.494.11-.494.63v1.59c0 .412-.137.63-1.233.63-1.808 0-3.808-1.096-5.233-3.151-2.137-3.041-2.712-5.315-2.712-5.781 0-.247.096-.48.575-.48h1.644c.438 0 .589.206.753.672.822 2.411 2.22 4.52 2.795 4.52.22 0 .315-.096.315-.63v-2.438c-.068-1.123-.658-1.219-.658-1.616 0-.206.164-.411.438-.411h2.713c.37 0 .493.192.493.603v3.288c0 .356.164.48.274.48.219 0 .411-.124.822-.535 1.26-1.41 2.164-3.589 2.164-3.589.11-.246.329-.48.767-.48h1.644c.493 0 .603.247.493.603-.206.959-2.22 3.836-2.22 3.836-.178.274-.246.411 0 .74 0 0 1.945 2.658 2.137 3.534.192.658-.329.685-.329.685z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default Footer;