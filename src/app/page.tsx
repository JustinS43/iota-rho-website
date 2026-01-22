export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-sigma-blue text-sigma-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-sm font-medium opacity-90">
            Phi Beta Sigma Fraternity, Inc.
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Iota Rho Chapter
          </h1>

          <p className="mt-4 max-w-2xl text-lg opacity-95">
            Welcome to the official website of the Iota Rho Chapter at the University of Central Florida.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-sigma-blue"
            >
              Learn About Us
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact / Interest
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-sigma-ink md:text-3xl">
          Welcome
        </h2>

        <p className="mt-4 max-w-3xl text-sigma-slate">
          The Iota Rho Chapter of Phi Beta Sigma Fraternity, Inc. is committed to brotherhood, scholarship,
          and Service. Our chapter strives to uplift the UCF community while fostering
          lifelong bonds among our members.
        </p>
      </section>

      {/* Values Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-sigma-ink md:text-3xl">
            What We Stand For
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold text-sigma-ink">
                Brotherhood
              </h3>
              <p className="mt-2 text-sm text-sigma-slate">
                Building unity, accountability, and lifelong bonds.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold text-sigma-ink">
                Scholarship
              </h3>
              <p className="mt-2 text-sm text-sigma-slate">
                Pursuing academic excellence and personal growth.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold text-sigma-ink">
                Service
              </h3>
              <p className="mt-2 text-sm text-sigma-slate">
                Giving back through impactful community service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
