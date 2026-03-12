export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/80 text-slate-300 border border-slate-600/50">
      {children}
    </span>
  );
}
