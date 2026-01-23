import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

export default function AboutPage() {
  return (
    <PageShell
      title="About Iota Rho"
      subtitle="The Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. at the University of Central Florida."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ThemedCard>
          <h2 className="text-lg font-semibold">Mission</h2>
          <p className="mt-2 text-sm text-white/70">
            To develop leaders, promote brotherhood, and provide meaningful service at UCF and beyond.
          </p>
        </ThemedCard>

        <ThemedCard>
          <h2 className="text-lg font-semibold">Values</h2>
          <p className="mt-2 text-sm text-white/70">
            Brotherhood. Scholarship. Service. We carry these values into everything we do.
          </p>
        </ThemedCard>
      </div>
    </PageShell>
  );
}
