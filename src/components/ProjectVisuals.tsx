/** Small, honest visuals for the homepage cards. All conceptual, no fake data. */

export function SubcontractingVisual() {
  const nodes = ["Order", "Dispatch", "Vendor", "Return"];
  return (
    <div className="w-full max-w-sm" aria-hidden>
      <div className="flex items-center">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full border-2 border-accent bg-white" />
              <span className="text-xs text-muted">{n}</span>
            </div>
            {i < nodes.length - 1 && <span className="mb-5 h-px flex-1 bg-line-strong" />}
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-dashed border-accent/50 bg-tint/60 p-4">
        <p className="font-serif text-xl">Who gets the next job?</p>
        <div className="mt-3 flex gap-2 text-xs">
          {["Workload", "Quality", "Rates"].map((c) => (
            <span key={c} className="rounded-full border border-accent/40 bg-white px-2.5 py-1 text-accent-ink">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TicketVisual() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-paper/15 bg-[#2B2E33] text-paper" aria-hidden>
      <div className="flex gap-1.5 border-b border-paper/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/25" />
      </div>
      <div className="space-y-4 p-5">
        <p className="font-serif text-xl">Report an issue</p>
        <div className="flex gap-2 text-xs">
          <span className="rounded-full bg-paper px-3 py-1 font-medium text-ink">Bug</span>
          <span className="rounded-full border border-paper/25 px-3 py-1">Query</span>
          <span className="rounded-full border border-paper/25 px-3 py-1">Enhancement</span>
        </div>
        <div className="flex h-16 items-center justify-center rounded-lg border border-dashed border-paper/30 text-xs text-paper/70">
          Screenshot of current screen
        </div>
        <div className="rounded-lg bg-accent/90 px-3 py-2 text-xs">AI first-level analysis</div>
      </div>
    </div>
  );
}

export function RecyclingVisual() {
  return (
    <div className="w-full max-w-sm space-y-6" aria-hidden>
      <div>
        <p className="mb-2 text-xs text-ink/70">Earlier implementations</p>
        <div className="relative h-9 rounded-lg bg-white/70">
          <div className="absolute inset-y-0 left-0 w-[86%] rounded-l-lg bg-ink/80" />
          <div className="absolute inset-y-0 left-[86%] right-0 rounded-r-lg bg-ink/35" />
          <span className="absolute inset-y-0 left-3 flex items-center text-xs font-medium text-paper">6 to 7 months</span>
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs text-ink/70">This one, through to adoption</p>
        <div className="relative h-9 rounded-lg bg-white/70">
          <div className="absolute inset-y-0 left-0 w-[29%] rounded-lg bg-accent" />
          <span className="absolute inset-y-0 left-3 flex items-center whitespace-nowrap text-xs font-medium text-paper">About 2 months</span>
        </div>
      </div>
      <p className="text-xs text-ink/70">An observed comparison, not a controlled experiment.</p>
    </div>
  );
}
