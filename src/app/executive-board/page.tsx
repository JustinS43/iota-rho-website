import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

const board = [
  { name: "Your Name", title: "President" },
  { name: "Your Name", title: "Vice President" },
  { name: "Your Name", title: "Secretary" },
  { name: "Your Name", title: "Treasurer" },
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
            <h2 className="mt-4 text-lg font-semibold">{m.name}</h2>
            <p className="text-sm text-white/70">{m.title}</p>
          </ThemedCard>
        ))}
      </div>
    </PageShell>
  );
}
