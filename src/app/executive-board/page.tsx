import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const board = [
  { name: "Dharnel Leonard", title: "President" },
  { name: "Malachi Paulin", title: "1st Vice President" },
  { name: "Alfred Washington lll", title: "2nd Vice President" },
  { name: "Adrian Griner", title: "Secretary" },
  { name: "Roberto Gilbert", title: "Treasurer" },
  { name: "Justin Suriel", title: "Historian" },
  { name: "Jeremiah Williams", title: "Parliamentary" },
];

export default function ExecutiveBoardPage() {
  return (
    <PageShell title="Executive Board" subtitle="Swipe through the chapter leadership.">
      <div className="mt-20 flex justify-center">
        {/* Portrait viewer */}
        <div className="relative w-full max-w-sm sm:max-w-md">
          <div className="relative  w-full">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="h-full w-full"
            >
              <CarouselContent className="h-full">
                {board.map((m) => (
                  <CarouselItem key={m.title} className="h-full basis-full">
                    <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-10 py-32 text-center backdrop-blur">
                      <div className="mx-auto h-48 w-48 rounded-full bg-white/10" />

                      <h2 className="mt-6 text-2xl font-semibold">
                        {m.name ? (
                          <span className="text-white/90">{m.name}</span>
                        ) : (
                          <span className="italic text-white/50">Vacant</span>
                        )}
                      </h2>

                      <p className="mt-2 text-sm tracking-wide text-white/60">
                        {m.title}
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
