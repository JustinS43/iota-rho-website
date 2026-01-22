export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold text-sigma-ink md:text-4xl">
            About Iota Rho
        </h1>

        <p className="mt-6 max-w-3xl text-sigma-slate">
            The Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. at the University of Central Florida
            is committed to brotherhood, service, and leadership. This site will share our chapter story,
            leadership, and ways to connect with us.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
                <h2 className="text-lg font-semibold text-sigma-ink">Mission</h2>
                    <p className="mt-2 text-sm text-sigma-slate">
                        To develop leaders, promote brotherhood, and provide meaningful service at UCF and beyond.
                    </p>
            </div>
        <div className="rounded-2xl border p-6">
            <h2 className="text-lg font-semibold text-sigma-ink">Values</h2>
            <p className="mt-2 text-sm text-sigma-slate">
                Brotherhood. Scholarship. Service. We carry these values into everything we do.
            </p>
            </div>
        </div>
        </section>
  );
}
