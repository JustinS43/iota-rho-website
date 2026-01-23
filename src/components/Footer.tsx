"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Home footer: overlays the hero, doesn't push content down
  if (isHome) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 z-[90]">
        <div className="border-t border-white/10 bg-black/25 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs text-white/70">
              Phi Beta Sigma Fraternity, Inc. — Iota Rho Chapter • UCF
            </p>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Iota Rho Chapter
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Default footer for all other pages
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
