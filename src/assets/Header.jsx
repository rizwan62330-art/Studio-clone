export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-transparent px-20">
      <a
        href="/"
        className="mt-5 font-['Kaushan_Script'] text-[27px] text-[#fed136]"
      >
        Start Bootstrap
      </a>

      <nav className="mt-5">
        <ul className="flex items-center gap-[48px] font-['Montserrat'] text-[14px] font-normal tracking-[1px] text-white">
          <li className="hover:text-[#fed136]"><a href="#services">SERVICES</a></li>
          <li className="hover:text-[#fed136]"><a href="#portfolio">PORTFOLIO</a></li>
          <li className="hover:text-[#fed136]"><a href="#about">ABOUT</a></li>
          <li className="hover:text-[#fed136]"><a href="#team">TEAM</a></li>
          <li className="hover:text-[#fed136]"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}