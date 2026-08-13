export default function TagList({ items, limit }) {
  if (!items?.length) return null;

  const visibleItems = limit ? items.slice(0, limit) : items;
  const remainingCount = limit ? items.length - visibleItems.length : 0;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <span
          key={item}
          className="text-[10px] font-mono uppercase tracking-[0.1em] text-neutral-600 border border-neutral-300 px-2.5 py-1 rounded"
        >
          {item}
        </span>
      ))}

      {remainingCount > 0 && (
        <span className="text-[10px] font-mono uppercase tracking-[0.1em] text-brand-cream bg-neutral-900 border border-neutral-900 px-2.5 py-1 rounded">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
}
