import { BriefWizard } from "@/components/brief/brief-wizard";

export default function BriefPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12">
      <section className="mb-10 max-w-3xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Project brief
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-zinc-950">
          Start with a focused landing page brief.
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          Share the offer, audience, launch readiness, and success criteria. The
          system will score the brief and highlight what needs more clarity.
        </p>
      </section>

      <BriefWizard />
    </main>
  );
}
