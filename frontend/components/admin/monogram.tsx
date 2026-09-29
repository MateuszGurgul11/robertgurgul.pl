// Znak „rg.” + ROBERT GURGUL — jak w nagłówku strony głównej.
export function Monogram({ ciemny = false, podpis = "Robert\nGurgul" }: { ciemny?: boolean; podpis?: string }) {
  const kolor = ciemny ? "text-navy-deep" : "text-offwhite";
  const linia = ciemny ? "border-navy-deep/20" : "border-offwhite/25";
  return (
    <span className={`flex items-center gap-4 ${kolor}`}>
      <span className="font-body text-[40px] leading-none tracking-[-4px]" aria-hidden="true">
        rg<span className="opacity-50">.</span>
      </span>
      <span className={`whitespace-pre-line border-l ${linia} py-0.5 pl-4 text-[11px] uppercase leading-snug tracking-[0.08em]`}>
        {podpis}
      </span>
    </span>
  );
}
