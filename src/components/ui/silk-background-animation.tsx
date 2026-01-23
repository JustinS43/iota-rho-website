"use client";

import React, { useEffect, useRef, useState } from "react";

type SilkHeroProps = {
  title?: string;
  subtitle?: string;
  cornerText?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export const Component = ({
  title = "Iota Rho",
  subtitle = "Phi Beta Sigma Fraternity, Inc. • University of Central Florida",
  cornerText = "Iota Rho • UCF",
  primaryCta = { label: "Learn About Us", href: "/about" },
  secondaryCta = { label: "Contact / Interest", href: "/contact" },
}: SilkHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fade-in trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 250);
    return () => clearTimeout(timer);
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const speed = 0.02;
    const scale = 2;
    const noiseIntensity = 0.8;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      const rx = G * Math.sin(G * x);
      const ry = G * Math.sin(G * y);
      return (rx * ry * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;

      // Base gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#020617");   // deep navy
        gradient.addColorStop(0.5, "#020b2d"); // blue-black
        gradient.addColorStop(1, "#020617");


      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Silk-like pattern
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          const tOffset = speed * time;
          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );

          const rnd = noise(x, y);
          const intensity = Math.max(
            0,
            pattern - (rnd / 15.0) * noiseIntensity
          );

          // Purple-gray silk color
            const baseR = 20;
            const baseG = 80;
            const baseB = 180;

          const r = Math.floor(baseR * intensity);
          const g = Math.floor(baseG * intensity);
          const b = Math.floor(baseB * intensity);

          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
            data[index + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Soft depth vignette overlay
      const overlayGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 2
      );
      overlayGradient.addColorStop(0, "rgba(0,0,0,0.05)");
      overlayGradient.addColorStop(1, "rgba(0,0,0,0.45)");
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, width, height);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      {/* Scoped animations + helper classes (NO global html/body font overrides) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUpDelay {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInCorner {
          from { opacity: 0; transform: translateY(-1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .animate-fade-in-up-delay { animation: fadeInUpDelay 1s ease-out 0.25s forwards; }
        .animate-fade-in-corner { animation: fadeInCorner 1s ease-out 0.8s forwards; }
      `}</style>

      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* Canvas background */}
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Gradient overlay to improve readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="px-6 text-center">
            <h1
              className={[
                "opacity-0 text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light",
                "tracking-[-0.05em] leading-none text-white",
                isLoaded ? "animate-fade-in-up" : "",
              ].join(" ")}
              style={{ textShadow: "0 0 40px rgba(255, 255, 255, 0.10)" }}
            >
              {title}
            </h1>

            <p
              className={[
                "opacity-0 mt-6 text-xs sm:text-sm md:text-base font-light",
                "tracking-[0.28em] uppercase text-white/70",
                isLoaded ? "animate-fade-in-up-delay" : "",
              ].join(" ")}
            >
              {subtitle}
            </p>

            {/* CTAs */}
            <div
              className={[
                "opacity-0 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
                isLoaded ? "animate-fade-in-up-delay" : "",
              ].join(" ")}
            >
              <a
                href={primaryCta.href}
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
              >
                {primaryCta.label}
              </a>

              <a
                href={secondaryCta.href}
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div
          className={[
            "absolute left-6 top-6 z-30 opacity-0",
            "text-xs font-light tracking-widest uppercase text-white/45",
            isLoaded ? "animate-fade-in-corner" : "",
          ].join(" ")}
        >
          {cornerText}
        </div>
      </div>
    </>
  );
};
