export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-geist font-semibold text-sm tracking-wide text-neutral-900 hover:text-[#FE0600] transition"
        >
          Wuraola Adebisi
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-wider font-geist text-neutral-500">
          <li>
            <a
              href="#work"
              className="relative hover:text-[#FE0600] transition"
            >
              Work
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#FE0600] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative hover:text-[#FE0600] transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative hover:text-[#FE0600] transition"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="mailto:the.wuraola.adebisi@gmail.com"
          className="text-xs uppercase tracking-wider text-neutral-700 hover:text-[#FE0600] transition"
        >
          Hire Me ↗
        </a>
      </div>
    </nav>
  );
}
