import Nav from "../layout/Nav.jsx";

export default function CaseStudyLoading() {
  return (
    <div className="min-h-screen bg-brand-cream text-black font-geist antialiased">
      <Nav />
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <div className="space-y-4 w-full max-w-3xl px-6">
          <div className="h-3 w-24 bg-neutral-200 rounded animate-pulse" />
          <div className="h-8 w-2/3 bg-neutral-200 rounded animate-pulse" />
          <div className="h-80 w-full bg-neutral-200 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  );
}