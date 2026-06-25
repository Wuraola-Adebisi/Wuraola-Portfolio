import { Link } from "react-router-dom";
import Nav from "../layout/Nav.jsx";

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-brand-cream text-black font-geist antialiased">
      <Nav />
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="text-center space-y-4">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#FE0600]">
            Not Found
          </p>
          <h1 className="text-2xl font-semibold text-neutral-900">
            This project couldn't be found.
          </h1>
          <Link
            to="/#work"
            className="inline-block text-xs font-mono uppercase tracking-[0.1em] text-neutral-900 border border-neutral-300 px-4 py-2.5 hover:border-[#FE0600] hover:text-[#FE0600] transition-colors"
          >
            ← Back to projects
          </Link>
        </div>
      </div>
    </div>
  );
}