import { ReadinessSummary } from "@/components/brief/readiness-summary";

export default function BriefSuccessPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12">
      <section className="mb-10 space-y-5">
        <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          Brief submitted
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-zinc-950">
          Your readiness summary is ready.
        </h1>
        <p className="text-lg leading-8 text-zinc-600">
          This score is based on your current brief. It helps identify whether
          the project is ready for build or needs more shaping first.
        </p>
      </section>

      <ReadinessSummary />
    </main>
  );
}
