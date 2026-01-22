export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-sigma-ink">
              Phi Beta Sigma Fraternity, Inc.
            </p>
            <p className="text-sm text-sigma-slate">
              Iota Rho Chapter • University of Central Florida
            </p>
          </div>

          <p className="text-sm text-sigma-slate">
            © {new Date().getFullYear()} Iota Rho Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
