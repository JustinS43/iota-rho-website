const board = [
    { name: "Your Name Here", title: "President" },
    { name: "Your Name Here", title: "Vice President" },
    { name: "Your Name Here", title: "Secretary" },
    { name: "Your Name Here", title: "Treasurer" },
];

export default function ExecutiveBoardPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-3xl font-bold text-sigma-ink md:text-4xl">
                Executive Board
            </h1>

            <p className="mt-4 max-w-3xl text-sigma-slate">
                This page lists the current executive board leadership of the Iota Rho Chapter.
                We’ll replace the placeholders with real names, roles, and photos.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {board.map((m) => (
                    <div key={m.title} className="rounded-2xl border p-6 shadow-sm">
                        <div className="h-20 w-20 rounded-full bg-sigma-blue/10" />
                        <h2 className="mt-4 text-lg font-semibold text-sigma-ink">{m.name}</h2>
                        <p className="text-sm text-sigma-slate">{m.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
