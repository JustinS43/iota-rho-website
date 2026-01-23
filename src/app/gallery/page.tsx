import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

export default function GalleryPage() {
  return (
    <PageShell
      title="Gallery"
      subtitle="Photos and highlights from chapter events and service."
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <ThemedCard key={i}>
            <div className="aspect-square rounded-xl bg-white/10" />
          </ThemedCard>
        ))}
      </div>
    </PageShell>
  );
}
