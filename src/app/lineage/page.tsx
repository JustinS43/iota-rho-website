import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

// Scalable data model: just add a new object to this array for new lines
type LineageLine = {
  id: string;          // unique key
  title: string;       // e.g., "Spring 2024 — The ____ Line"
  subtitle?: string;   // e.g., "Crossed: April 2024"
  photoAlt: string;
  // For now use a placeholder block. Later you can swap to Image with a local file path.
  members: string[];
};

const lines: LineageLine[] = [
    {
    id: "line-2025-spring",
    title: "Spring 2025 — The 8 Bolts of Immortality",
    subtitle: "Crossed: Spring 2025",
    photoAlt: "Line photo",
    members: ["#1 Roberto Gilbert - Savior", "#2 Malachi Paulin - Stormbreaker", "#3 Adrian Griner - Visionary","#4 Dharnell Leonard - Kratos", "#5 Justin Suriel -Solace", " #6 Jeremiah Williams - Hercules", "#7 Jalen Brooks - Relentless", "#8 Nathan Lyn- Static"],
    },
    {
    id: "line-2024-spring",
    title: "Spring 2024 — (Line Name Here)",
    subtitle: "Crossed: Spring 2024",
    photoAlt: "Line photo",
    members: ["Member One", "Member Two", "Member Three"],
    },
    {
    id: "line-2023-spring",
    title: "Spring 2023 — (Line Name Here)",
    subtitle: "Crossed: Spring 2023",
    photoAlt: "Line photo",
    members: ["Member One", "Member Two"],
    },
];

export default function LineagePage() {
  return (
    <PageShell
      title="Lineage"
      subtitle="A timeline of the Iota Rho Chapter’s lines. New lines can be added easily as the chapter grows."
    >
      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-8" />

        <div className="space-y-8">
          {lines.map((line) => (
            <div key={line.id} className="relative pl-12 md:pl-20">
              {/* timeline dot */}
              <div className="absolute left-2 top-8 h-4 w-4 rounded-full bg-sigma-blue ring-4 ring-white/10 md:left-6" />

              <ThemedCard>
                <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
                  {/* Photo (placeholder) */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="aspect-[4/3] w-full bg-gradient-to-br from-white/10 to-black/20" />
                    <div className="px-4 py-3">
                      <p className="text-xs text-white/60">{line.photoAlt}</p>
                      <p className="text-xs text-white/40">
                        Replace with a real line photo later
                      </p>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {line.title}
                    </h2>
                    {line.subtitle ? (
                      <p className="mt-1 text-sm text-white/60">{line.subtitle}</p>
                    ) : null}

                    <div className="mt-5">
                      <h3 className="text-sm font-semibold text-white/80">
                        Members
                      </h3>

                      <ul className="mt-3 space-y-2">
                        {line.members.map((name) => (
                          <li
                            key={`${line.id}-${name}`}
                            className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80"
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ThemedCard>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
