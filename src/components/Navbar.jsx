import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTransparent = isHome && !isScrolled;

  const navLinkStyle = ({ isActive }) =>
    `text-[12px] font-normal whitespace-nowrap no-underline transition-colors duration-200 max-[1100px]:text-[11px] ${
      isActive
        ? "text-[#5289df] font-medium"
        : isTransparent
        ? "text-white hover:text-[#5289df]"
        : "text-[#333] hover:text-[#5289df]"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[1000] w-full h-[66px] transition-all duration-300 ${
          isTransparent
            ? "bg-transparent border-b border-white/10 text-white"
            : "bg-white border-b border-[#eeeeee] text-[#333] shadow-sm"
        }`}
      >
        <div className="w-full max-w-[1250px] h-full mx-auto flex items-center justify-between px-4 md:px-0">
          <Link
            to="/"
            className="w-[150px] h-full flex items-center shrink-0 max-[768px]:w-auto"
          >
            <img
              src={isTransparent ? "src/assets/logo.png" : "src/assets/logo-dark.png"}
              alt="Aliance Production"
              className="block w-[130px] h-auto max-[768px]:w-[115px]"
            />
          </Link>

          <nav
            className="
              flex-1
              flex
              items-center
              justify-between
              ml-[25px]

              max-[1100px]:ml-[15px]
              max-[1100px]:gap-[15px]

              max-[768px]:hidden
            "
          >
            <NavLink to="/about" className={navLinkStyle}>
              О компании
            </NavLink>

            <NavLink to="/contract-product" className={navLinkStyle}>
              Контрактное производство
            </NavLink>

            <NavLink to="/own-product" className={navLinkStyle}>
              Собственные торговые марки
            </NavLink>

            <NavLink to="/blog" className={navLinkStyle}>
              Новости
            </NavLink>

            <NavLink to="/contact" className={navLinkStyle}>
              Контакты
            </NavLink>
          </nav>

          <a
            href="tel:+74996861014"
            className={`
              flex
              items-center
              gap-[7px]
              ml-[25px]

              text-[12px]
              font-medium
              whitespace-nowrap
              no-underline

              max-[1100px]:ml-[15px]
              max-[1100px]:text-[11px]

              max-[768px]:hidden
              ${isTransparent ? "text-white" : "text-[#333]"}
            `}
          >
            <PhoneIcon />
            <span>+7 (499) 686-10-14</span>
          </a>

          <Link
            to="/contact"
            className="
              h-[66px]
              min-w-[180px]
              ml-[25px]

              flex
              items-center
              justify-center

              bg-[#5b8fe4]
              text-white

              text-[12px]
              font-medium
              whitespace-nowrap
              no-underline

              transition-colors
              duration-200

              hover:bg-[#477fdc]

              max-[1100px]:min-w-[150px]
              max-[1100px]:ml-[15px]

              max-[768px]:hidden
            "
          >
            Получить консультацию
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Открыть меню"
            className={`
              hidden

              max-[768px]:flex

              w-[65px]
              h-[66px]

              items-center
              justify-center

              border-0
              border-l

              bg-transparent

              cursor-pointer

              ml-auto
              ${
                isTransparent
                  ? "border-white/20 text-white"
                  : "border-[#eeeeee] text-[#333]"
              }
            `}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <aside
        className={`
          fixed
          top-0
          left-0

          w-[275px]
          h-screen

          bg-white

          z-[1001]

          overflow-y-auto

          transition-transform
          duration-300
          ease-in-out

          max-[768px]:block
          min-[769px]:hidden

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div
          className="
            h-[66px]

            flex
            items-center

            border-b
            border-[#eeeeee]
          "
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
            className="
              w-[55px]
              h-[66px]

              flex
              items-center
              justify-center

              border-0
              border-r
              border-[#eeeeee]

              bg-white

              cursor-pointer
            "
          >
            <CloseIcon />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="
              flex-1
              flex
              justify-center
            "
          >
            <img
              src="src/assets/logo-dark.png"
              alt="Aliance Production"
              className="
                w-[115px]
                h-auto
              "
            />
          </Link>

          <a
            href="tel:+74996861014"
            className="
              w-[55px]
              h-[66px]

              flex
              items-center
              justify-center

              bg-[#5b8fe4]
              text-white

              no-underline
            "
          >
            <PhoneIcon mobile />
          </a>
        </div>

        <nav className="px-6 pt-5 pb-10">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-[#333] text-[12px] font-semibold no-underline mb-[27px]"
          >
            О компании
          </Link>

          <div className="mb-[2px]">
            <Link
              to="/contract-product"
              onClick={() => setIsOpen(false)}
              className="block text-[#333] text-[12px] font-semibold no-underline mb-[27px]"
            >
              Контрактное производство
            </Link>

            <div className="pl-[14px] -mt-[10px] mb-7 flex flex-col gap-3">
              <Link
                to="/contract-product/autohim"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Автомобильная химия
              </Link>
              <Link
                to="/contract-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Бытовая химия
              </Link>
              <Link
                to="/contract-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Дезинфицирующие средства
              </Link>
              <Link
                to="/contract-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Пищевые аэрозоли
              </Link>
              <Link
                to="/contract-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Косметическая продукция
              </Link>
              <Link
                to="/contract-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Краски аэрозольные
              </Link>
            </div>
          </div>

          <div className="mb-[2px]">
            <Link
              to="/own-product"
              onClick={() => setIsOpen(false)}
              className="block text-[#333] text-[12px] font-semibold no-underline mb-[27px]"
            >
              Собственные марки
            </Link>

            <div className="pl-[14px] -mt-[10px] mb-7 flex flex-col gap-3">
              <Link
                to="/own-product/ag-tech"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Автохимия AG-Tech
              </Link>
              <Link
                to="/own-product"
                onClick={() => setIsOpen(false)}
                className="text-[#9aa0aa] text-[11px] leading-[1.3] no-underline hover:text-[#5289df]"
              >
                Автохимия AP
              </Link>
            </div>
          </div>

          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className="block text-[#333] text-[12px] font-semibold no-underline mb-[27px]"
          >
            Новости
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-[#333] text-[12px] font-semibold no-underline mb-[27px]"
          >
            Контакты
          </Link>
        </nav>
      </aside>
    </>
  );
};

const PhoneIcon = ({ mobile = false }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={mobile ? "text-white" : "text-[#5289df]"}
  >
    <path
      d="M22 16.92V20.92C22 21.47 21.55 21.92 21 21.92C10.51 21.92 2 13.41 2 2.92C2 2.37 2.45 1.92 3 1.92H7C7.55 1.92 8 2.37 8 2.92C8 4.17 8.2 5.38 8.58 6.51C8.66 6.76 8.6 7.04 8.41 7.23L6.27 9.37C7.75 12.28 10.14 14.67 13.05 16.15L15.19 14.01C15.38 13.82 15.66 13.76 15.91 13.84C17.04 14.22 18.25 14.42 19.5 14.42C20.05 14.42 20.5 14.87 20.5 15.42V19.42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 6H20M4 12H20M4 18H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 5L19 19M19 5L5 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Navbar;