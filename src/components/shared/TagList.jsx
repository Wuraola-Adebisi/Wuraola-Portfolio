export default function TagList({ items }) {
  if (!items?.length) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-[10px] font-mono uppercase tracking-[0.1em] text-neutral-600 border border-neutral-300 px-2.5 py-1 rounded"
        >
          {item}
        </span>
      ))}
    </div>
  );
}