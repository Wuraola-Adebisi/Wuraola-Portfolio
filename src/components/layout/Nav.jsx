import { navLinks } from "../../data/navLinks";
import { useToggle } from "../../hooks/useToggle";

export default function Nav() {
  const { value: open, toggle, close } = useToggle();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm tracking-wide text-neutral-900 hover:text-[#FE0600] transition"
        >
          <span className="text-[#FE0600]">[</span>WA
          <span className="text-[#FE0600]">]</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-wider font-geist text-neutral-500">
          {navLinks.map(({ href, label }) => (
            <li key={href} className="group relative">
              <a href={href} className="hover:text-[#FE0600] transition">
                {label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#FE0600] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <a
          href="mailto:the.wuraola.adebisi@gmail.com"
          className="hidden md:inline-block px-4 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider hover:bg-[#FE0600] transition"
        >
          Get in Touch ↗
        </a>

        <button
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-6 h-px bg-neutral-900 transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-neutral-900 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-px bg-neutral-900 transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-neutral-200 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-sm uppercase tracking-wider font-geist text-neutral-700">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={close}
                className="block py-2 hover:text-[#FE0600] transition"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:the.wuraola.adebisi@gmail.com"
              onClick={close}
              className="block py-2 text-[#FE0600] font-medium"
            >
              Get in Touch ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
