import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

export function Mark({ className = 'h-8 w-8' }) {
  return (
    <div className={`${className} shrink-0 rounded-[22%] bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-sm ring-1 ring-white/20`}>
      <Scale className="h-4 w-4" strokeWidth={2.2} />
    </div>
  );
}

export default function Logo({ to = '/', light = false }) {
  return (
    <Link to={to} className={`inline-flex items-center gap-2.5 ${light ? 'text-white' : 'text-ink'}`} aria-label="NyayaSetu home">
      <Mark />
      <span className="text-[19px] tracking-tight">
        <span className="font-serif text-[22px] tracking-wide">Nyaya</span>
        <span className="font-semibold text-emerald-400">Setu</span>
      </span>
    </Link>
  );
}
