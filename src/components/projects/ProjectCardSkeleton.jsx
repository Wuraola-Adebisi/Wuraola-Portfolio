export default function ProjectCardSkeleton() {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-neutral-50 p-6 flex items-center justify-center h-64">
        <div className="w-full h-full bg-neutral-200 rounded-md animate-pulse" />
      </div>

      <div className="p-6 space-y-4">
        <div className="h-2.5 w-16 bg-neutral-200 rounded animate-pulse" />
        <div className="h-5 w-2/3 bg-neutral-200 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 w-full bg-neutral-200 rounded animate-pulse" />
          <div className="h-3 w-5/6 bg-neutral-200 rounded animate-pulse" />
        </div>
        <div className="h-3 w-1/3 bg-neutral-200 rounded animate-pulse" />
        <div className="h-9 w-32 bg-neutral-200 rounded animate-pulse" />
      </div>
    </div>
  );
}