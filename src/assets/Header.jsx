import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#212529] shadow-md'
          : 'bg-[#212529] lg:bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex h-20 items-center font-['Kaushan_Script'] text-[24px] text-[#fed136] lg:text-[27px]"
        >
          Start Bootstrap
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navigation"
          className="min-h-11 cursor-pointer rounded bg-[#fed136] px-4 py-2 font-['Montserrat'] text-sm font-bold text-[#212529] lg:hidden"
        >
          {menuOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>

        {/* Navigation links */}
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={`w-full pb-4 lg:block lg:w-auto lg:pb-0 ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col font-['Montserrat'] text-[14px] tracking-[1px] text-white lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-3 hover:text-[#fed136]"
              >
                SERVICES
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={closeMenu}
                className="block py-3 hover:text-[#fed136]"
              >
                PORTFOLIO
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-3 hover:text-[#fed136]"
              >
                ABOUT
              </a>
            </li>

            <li>
              <a
                href="#team"
                onClick={closeMenu}
                className="block py-3 hover:text-[#fed136]"
              >
                TEAM
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-3 hover:text-[#fed136]"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}