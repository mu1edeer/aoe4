"use client";

import { useState } from "react";

/* ──────────────────────────────────────────────────────────
   EDIT THESE ── drop in your real mint + socials
   ────────────────────────────────────────────────────────── */
const CONTRACT_ADDRESS = "UPDATING";
const PUMP_URL = `https://pump.fun/coin/${CONTRACT_ADDRESS}`;
const TICKER = "$AOE4";
const X_URL = "https://x.com/aoe4sol";
const TELEGRAM_URL = "https://t.me/";
const PUMP_LOGO = "https://pump.fun/pump-logomark.svg";
const PUMP_GREEN = "#86efac";

/* Solana mark — inlined so there are no dead links */
function SolanaMark({ className = "" }) {
  return (
    <svg viewBox="0 0 100 78" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="solGrad" x1="0" y1="0" x2="100" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="100%" stopColor="#14F195" />
        </linearGradient>
      </defs>
      <g fill="url(#solGrad)">
        <path d="M18 4 L98 4 L82 20 L2 20 Z" />
        <path d="M2 31 L82 31 L98 47 L18 47 Z" />
        <path d="M18 58 L98 58 L82 74 L2 74 Z" />
      </g>
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // clipboard blocked — fall back to opening the token page
      window.open(PUMP_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main
      className="relative flex h-dvh w-full flex-col overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(8,18,36,0.80), rgba(6,14,30,0.94)), url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* gilt frame border */}
      <div className="pointer-events-none absolute inset-3 z-20 rounded-sm border border-gold/40 sm:inset-5" />
      <div className="pointer-events-none absolute inset-3 z-20 rounded-sm shadow-[inset_0_0_120px_rgba(0,0,0,0.6)] sm:inset-5" />

      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <header className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-display text-lg font-700 tracking-[0.25em] text-gilt sm:text-xl">
          {TICKER}
        </span>
        <div className="flex items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-3 py-1.5 backdrop-blur">
          <SolanaMark className="h-3 w-4" />
          <span className="text-[0.65rem] font-600 uppercase tracking-[0.2em] text-parchment/80">
            Built on Solana
          </span>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative z-30 flex flex-1 flex-col items-center justify-center px-6 text-center">
        {/* optional logo — drop /public/logo.png to use it */}
        <img
          src="/logo.png"
          alt=""
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className="mb-4 max-h-24 w-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:max-h-32"
        />

        <h1 className="font-display text-4xl font-900 leading-[0.9] tracking-tight text-gilt drop-shadow-[0_3px_0_rgba(0,0,0,0.5)] sm:text-6xl md:text-7xl">
          Age of Empires <span className="text-pump">IV</span>
        </h1>

        <p className="mt-3 flex items-center gap-2 font-display text-base font-600 uppercase tracking-[0.35em] text-parchment/90 sm:text-xl">
          on
          <SolanaMark className="h-4 w-6 translate-y-[1px]" />
          Solana
        </p>

        <p className="mt-5 max-w-xl text-sm text-parchment/70 sm:text-base">
          Rally the empire. Raid the charts. {TICKER} marches on Solana —
          launched on pump.fun and built for RTS degens who never stop the
          knight production.
        </p>

        {/* ── CONTRACT ADDRESS ─────────────────────────────── */}
        <div className="mt-8 w-full max-w-xl">
          <p className="mb-2 text-[0.65rem] font-600 uppercase tracking-[0.25em] text-gold/80">
            Contract Address
          </p>
          <div className="flex items-stretch overflow-hidden rounded-md border border-gold/40 bg-black/40 backdrop-blur">
            <button
              onClick={copyCA}
              title="Click to copy"
              className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 px-4 py-3 text-left transition hover:bg-white/5"
            >
              <span className="truncate font-mono text-xs text-parchment/90 sm:text-sm">
                {CONTRACT_ADDRESS}
              </span>
            </button>
            <button
              onClick={copyCA}
              className="shrink-0 border-l border-gold/40 px-4 text-xs font-700 uppercase tracking-wider transition"
              style={{ color: copied ? "#08121f" : PUMP_GREEN, backgroundColor: copied ? PUMP_GREEN : "transparent" }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-2 text-[0.7rem] text-parchment/40">
            Tap the address to copy, or buy below.
          </p>
        </div>

        {/* ── CTAs ─────────────────────────────────────────── */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PUMP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-md px-6 py-3 font-700 text-[#08121f] shadow-[0_6px_22px_rgba(134,239,172,0.35)] transition hover:brightness-105 active:translate-y-px"
            style={{ backgroundColor: PUMP_GREEN }}
          >
            <img src={PUMP_LOGO} alt="pump.fun" className="h-5 w-5" />
            <span className="uppercase tracking-wide">Buy on pump.fun</span>
          </a>

          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/40 bg-black/30 text-parchment/90 backdrop-blur transition hover:border-pump hover:text-pump"
            aria-label="X / Twitter"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="relative z-30 px-6 pb-5 text-center sm:px-10">
        <p className="mx-auto max-w-2xl text-[0.62rem] leading-relaxed text-parchment/35">
          {TICKER} is a community meme coin with no intrinsic value or
          expectation of financial return — for entertainment only, not
          financial advice. Not affiliated with, sponsored, or endorsed by
          Microsoft, Xbox Game Studios, World&apos;s Edge, or Relic
          Entertainment. All game trademarks belong to their respective owners.
        </p>
      </footer>
    </main>
  );
}