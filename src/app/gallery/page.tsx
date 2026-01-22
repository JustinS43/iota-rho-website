export default function GalleryPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-3xl font-bold text-sigma-ink md:text-4xl">
                Gallery
            </h1>
            
            <p className="mt-4 max-w-3xl text-sigma-slate">
                Photos and higlights from chapter events and service. We'll connect this to uploads.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
                {Array.from({ length: 9 }).map((_, index) => (
                    <div 
                        key={index}
                        className="aspect-square rounded-2xl bg-sigma-blue/10"
                    />
                ))}
            </div>
        </section>
    );
}