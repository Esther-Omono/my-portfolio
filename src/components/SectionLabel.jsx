export default function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-widest text-slate-400 font-[Montserrat] ${className}`}
    >
      — {children}
    </p>
  );
}
