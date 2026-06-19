export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-geist font-medium text-sm tracking-[0.15em] lowercase text-neutral-400 hover:text-[#FE0600] transition"
        >
          wa.
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-wider font-geist text-neutral-500">
          <li className="group relative">
            <a href="#work" className="hover:text-[#FE0600] transition">
              Work
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#FE0600] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <a href="#about" className="hover:text-[#FE0600] transition">
              About
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#FE0600] transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <a href="#contact" className="hover:text-[#FE0600] transition">
              Contact
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#FE0600] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        <a
          href="mailto:the.wuraola.adebisi@gmail.com"
          className="px-4 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider hover:bg-[#FE0600] transition"
        >
          Get in Touch ↗
        </a>
      </div>
    </nav>
  );
}
