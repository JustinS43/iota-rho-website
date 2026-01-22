export default function ContactPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-3xl font-bold text-sigma-ink md:text-4xl">
                Contact / Interest
        </h1>

        <p className="mt-4 max-w-3xl text-sigma-slate">
            Reach out to the Iota Rho Chapter. This form will be connected to the backend later.
        </p>

        <form className="mt-10 max-w-xl space-y-4 rounded-2xl border p-6 shadow-sm">
            <div>
                <label className="text-sm font-medium text-sigma-ink">Name</label>
            <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Your name"
            />
        </div>

        <div>
            <label className="text-sm font-medium text-sigma-ink">Email</label>
            <input
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="you@example.com"
            />
        </div>

        <div>
            <label className="text-sm font-medium text-sigma-ink">Message</label>
            <textarea
                className="mt-1 w-full rounded-lg border px-3 py-2"
                rows={5}
                placeholder="How can we help?"
            />
        </div>

        <button
            type="button"
            className="rounded-lg bg-sigma-blue px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
        >
            Send (coming soon)
        </button>
        </form>
    </section>
  );
}
