"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/executive-board", label: "Executive Board" },
  { href: "/gallery", label: "Gallery" },
  { href: "/lineage", label: "Lineage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Styles change depending on whether we are on the home (silk hero) page
  const headerClass = isHome
    ? "sticky top-0 z-[100] border-b border-white/10 bg-black/25 backdrop-blur"
    : "sticky top-0 z-[100] border-b bg-white";

  const linkBase = isHome
    ? "text-white/90 hover:text-white"
    : "text-sigma-ink hover:text-sigma-blue";

  const activeLink = isHome ? "text-white" : "text-sigma-blue";

  const mobilePanelClass = isHome
    ? "border-t border-white/10 bg-black/60 backdrop-blur md:hidden"
    : "border-t bg-white md:hidden";

  const mobileLinkClass = (active: boolean) =>
    [
      "block rounded-lg px-3 py-2 text-sm font-medium transition",
      isHome
        ? active
          ? "bg-white/10 text-white"
          : "text-white/90 hover:bg-white/5 hover:text-white"
        : active
          ? "bg-sigma-blue/10 text-sigma-blue"
          : "text-sigma-ink hover:bg-sigma-blue/5",
    ].join(" ");

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder crest */}
          <div className={["h-9 w-9 rounded-full", isHome ? "bg-white/90" : "bg-sigma-blue"].join(" ")} />
          <div className="leading-tight">
            <p className={["text-sm font-semibold", isHome ? "text-white" : "text-sigma-ink"].join(" ")}>
              Phi Beta Sigma
            </p>
            <p className={["text-xs", isHome ? "text-white/70" : "text-sigma-slate"].join(" ")}>
              Iota Rho Chapter • UCF
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "text-sm font-medium transition",
                  active ? activeLink : linkBase,
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={[
            "md:hidden rounded-lg px-3 py-2 text-sm font-medium transition",
            isHome
              ? "border border-white/20 text-white hover:bg-white/10"
              : "border text-sigma-ink hover:bg-black/5",
          ].join(" ")}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={mobilePanelClass}>
          <nav className="mx-auto max-w-6xl px-4 py-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={`${link.href}-${link.label}`}>
                    <Link href={link.href} className={mobileLinkClass(active)}>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
