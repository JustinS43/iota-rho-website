import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

export default function ContactPage() {
  return (
    <PageShell
      title="Contact / Interest"
      subtitle="Reach out to the Iota Rho Chapter. Form submission will be connected later."
    >
      <ThemedCard>
        <form className="max-w-xl space-y-4">
          <div>
            <label className="text-sm font-medium text-white/90">Name</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white/90">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-white/90">Message</label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
              rows={5}
              placeholder="How can we help?"
            />
          </div>

          <button
            type="button"
            className="rounded-lg bg-sigma-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-sigma-blue/90"
          >
            Send (coming soon)
          </button>
        </form>
      </ThemedCard>
    </PageShell>
  );
}
