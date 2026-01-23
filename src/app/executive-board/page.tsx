import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

const board = [
  { name: null, title: "President" },
  { name: null, title: "1st Vice President" },
  { name: null, title: "2nd Vice President" },
  { name: null, title: "Secretary" },
  { name: null, title: "Treasurer" },
  { name: null, title: "Parliamentarian" },
  { name: null, title: "Historian" },
];

export default function ExecutiveBoardPage() {
  return (
    <PageShell
      title="Executive Board"
      subtitle="Meet the leadership of the Iota Rho Chapter."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {board.map((m) => (
          <ThemedCard key={m.title}>
            <div className="h-20 w-20 rounded-full bg-white/10" />
            <h2 className="mt-4 text-lg font-semibold">
            {m.name ? (m.name) : (<span className="italic text-white/50">Vacant</span>)}
            </h2>
            <p className="text-sm text-white/70">{m.title}</p>
          </ThemedCard>
        ))}
      </div>
    </PageShell>
  );
}
