import type { ReactNode } from "react";
import type { DiagramId } from "@/content/types";

function Figure({ children, caption }: { children: ReactNode; caption?: string }) {
  return (
    <figure className="my-8 rounded-2xl border border-line bg-white p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-tint px-3 py-1 text-xs font-medium text-accent-ink">Illustration</span>
      </div>
      {children}
      {caption ? <figcaption className="mt-5 border-t border-line pt-4 text-sm text-muted">{caption}</figcaption> : null}
    </figure>
  );
}

function Steps({ steps }: { steps: { name: string; text?: string }[] }) {
  return (
    <ol className="relative space-y-5 border-l border-line-strong pl-7">
      {steps.map((s, i) => (
        <li key={s.name} className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.35rem] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-line-strong bg-paper text-xs font-medium"
          >
            {i + 1}
          </span>
          <p className="font-medium">{s.name}</p>
          {s.text ? <p className="mt-0.5 text-sm leading-6 text-muted">{s.text}</p> : null}
        </li>
      ))}
    </ol>
  );
}

function Chip({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "accent" }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-sm ${
        tone === "accent" ? "border-accent/40 bg-tint text-accent-ink" : "border-line-strong bg-paper"
      }`}
    >
      {children}
    </span>
  );
}

function SubcontractingFlow() {
  return (
    <div className="grid gap-8 sm:grid-cols-[1.1fr_1fr]">
      <Steps
        steps={[
          { name: "Subcontracting order", text: "Jobwork order created for a vendor" },
          { name: "Material dispatched", text: "What left the plant, and when" },
          { name: "With the vendor", text: "Visible vendor by vendor" },
          { name: "Expected return", text: "When processed material should be back" },
          { name: "Follow-up", text: "What needs chasing, and who with" },
        ]}
      />
      <div className="rounded-xl border border-dashed border-accent/50 bg-tint/60 p-5">
        <p className="font-serif text-2xl leading-tight">Who should get the next job?</p>
        <p className="mt-2 text-sm leading-6 text-muted">Vendor recommendation weighs three things together:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Chip tone="accent">Workload</Chip>
          <Chip tone="accent">Quality</Chip>
          <Chip tone="accent">Rates</Chip>
        </div>
      </div>
    </div>
  );
}

function TicketTriage() {
  return (
    <div className="grid gap-8 sm:grid-cols-[1.1fr_1fr]">
      <div>
        <Steps
          steps={[
            { name: "Issue raised inside the app", text: "With a screenshot of the current screen" },
            { name: "Sorted by type", text: "Bug, query or enhancement" },
            { name: "AI first-level analysis", text: "A first pass before a person looks" },
          ]}
        />
        <div className="mt-5 grid gap-3 pl-7 sm:grid-cols-2">
          <div className="rounded-xl border border-accent/50 bg-tint/60 p-4 text-sm leading-6">
            Some queries and apparent bugs are resolved without human intervention
          </div>
          <div className="rounded-xl border border-line-strong bg-paper p-4 text-sm leading-6">
            The rest go to people
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-line-strong bg-paper p-5">
        <p className="font-serif text-2xl leading-tight">What the teams see</p>
        <ul className="mt-4 space-y-2.5 text-sm leading-6">
          <li>Enhancements tracked by sprint and release</li>
          <li>QA dashboard</li>
          <li>Customer success dashboard</li>
          <li>Customer-wise ticket analysis</li>
        </ul>
      </div>
    </div>
  );
}

function DeliveryTimeline() {
  return (
    <div className="space-y-6" role="img" aria-label="Bar comparison: six to seven months historically versus about two months for this implementation.">
      <div>
        <p className="mb-2 text-sm text-muted">Earlier implementations that needed repeated modifications</p>
        <div className="relative h-11 w-full rounded-lg bg-line">
          <div className="absolute inset-y-0 left-0 w-[86%] rounded-l-lg bg-ink/80" />
          <div className="absolute inset-y-0 left-[86%] right-0 rounded-r-lg bg-ink/35" />
          <span className="absolute inset-y-0 left-4 flex items-center text-sm font-medium text-paper">6 to 7 months</span>
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm text-muted">This implementation, including user adoption</p>
        <div className="relative h-11 w-full rounded-lg bg-line">
          <div className="absolute inset-y-0 left-0 w-[29%] rounded-lg bg-accent" />
          <span className="absolute inset-y-0 left-4 flex items-center whitespace-nowrap text-sm font-medium text-paper">About 2 months</span>
        </div>
      </div>
    </div>
  );
}

export function Diagram({ id, caption }: { id: DiagramId; caption?: string }) {
  return (
    <Figure caption={caption}>
      {id === "subcontracting-flow" && <SubcontractingFlow />}
      {id === "ticket-triage" && <TicketTriage />}
      {id === "delivery-timeline" && <DeliveryTimeline />}
    </Figure>
  );
}
