import { Link, useLocation } from "react-router-dom";

const footerLinks = [
  { label: "Work", hash: "#work" },
  { label: "About", hash: "#about" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", hash: "#contact" },
];

const linkClass = "hover:text-[#FE0600] transition";

export default function SiteFooter() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  return (
    <footer className="bg-neutral-950 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[11px] text-neutral-400">
          © {new Date().getFullYear()} Wuraola Adebisi
        </p>

        <div className="flex gap-6 text-[11px] uppercase tracking-wider text-neutral-400">
          {footerLinks.map(({ label, hash, path }) => {
            if (path) {
              return (
                <Link key={label} to={path} className={linkClass}>
                  {label}
                </Link>
              );
            }

            if (onHome) {
              return (
                <a key={label} href={hash} className={linkClass}>
                  {label}
                </a>
              );
            }

            return (
              <Link key={label} to={`/${hash}`} className={linkClass}>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
