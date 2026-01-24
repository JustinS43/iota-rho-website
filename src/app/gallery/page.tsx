import PageShell from "@/components/PageShell";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// OPTION B: Optional custom captions (only add the ones you want)
// Keys are the photo numbers (1..15)
const captions: Record<number, string> = {
  1: "Spring 2025 Probate",
  2: "Community Service Day",
  3: "Homecoming Weekend",
  // ...
  // 15: "Founders Day"
};

// OPTION A: Auto-generate 15 photos named photo-01.jpg ... photo-15.jpg
const photos = Array.from({ length: 15 }, (_, i) => {
  const index = i + 1; // 1..15
  const num = String(index).padStart(2, "0"); // "01".."15"

  return {
    src: `/gallery/photo-${num}.jpg`,
    alt: `Gallery photo ${index}`,
    // If caption exists in captions map, use it; otherwise default
    caption: captions[index] ?? `Chapter Moment ${index}`,
  };
});

export default function GalleryPage() {
  return (
    <PageShell title="Gallery" subtitle="Swipe through chapter events and highlights.">
      <div className="mt-20 flex justify-center">
        {/* Portrait viewer (matches Exec Board) */}
        <div className="relative w-full max-w-sm sm:max-w-md">
          <div className="relative w-full">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="h-full w-full"
            >
              <CarouselContent className="h-full">
                {photos.map((p) => (
                  <CarouselItem key={p.src} className="h-full basis-full">
                    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-6 py-10 text-center backdrop-blur">
                      {/* Photo frame */}
                      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                        <div className="aspect-[3/4] w-full bg-gradient-to-br from-white/10 to-black/20">
                        </div>
                      </div>

                      {/* Caption */}
                      <p className="mt-6 text-sm tracking-wide text-white/70">
                        {p.caption}
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        Add images in <span className="text-white/60">/public/gallery</span> as{" "}
                        <span className="text-white/60">photo-01.jpg</span> ...{" "}
                        <span className="text-white/60">photo-15.jpg</span>
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="-left-8 border-white/20 bg-black/40 text-white hover:bg-black/60" />
              <CarouselNext className="-right-8 border-white/20 bg-black/40 text-white hover:bg-black/60" />
            </Carousel>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
