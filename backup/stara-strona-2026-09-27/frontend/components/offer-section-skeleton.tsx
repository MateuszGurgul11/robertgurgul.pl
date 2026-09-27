export function OfferSectionSkeleton() {
  return (
    <div className="animate-pulse bg-navy-deep" aria-hidden="true">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-10 h-8 w-48 rounded bg-navy-mid/40" />
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-64 w-72 shrink-0 rounded-2xl bg-navy-mid/30 sm:h-72 sm:w-80"
            />
          ))}
        </div>
      </div>
      <div className="h-48 bg-navy-mid/20" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="h-6 w-64 rounded bg-navy-mid/30" />
      </div>
    </div>
  );
}
