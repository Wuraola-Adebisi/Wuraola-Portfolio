export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[11px] text-neutral-500">
          © {new Date().getFullYear()} Wuraola Adebisi
        </p>

        <div className="flex gap-6 text-[11px] uppercase tracking-wider text-neutral-500">
          <a href="#work" className="hover:text-[#FE0600] transition">
            Work
          </a>

          <a href="#about" className="hover:text-[#FE0600] transition">
            About
          </a>

          <a href="#contact" className="hover:text-[#FE0600] transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
