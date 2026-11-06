const metrics = [
  { label: "WORLD STATUS", value: "INITIALIZING", detail: "Vesper, 2089" },
  { label: "IDENTITIES", value: "03", detail: "One character. Many lives." },
  { label: "FAMILY INFLUENCE", value: "—", detail: "Relationships will shape the city." },
];
const identities = [
  { alias: "MARYAM", role: "PUBLIC IDENTITY", tone: "from-violet-500/20" },
  { alias: "NOX", role: "UNDERGROUND IDENTITY", tone: "from-cyan-500/20" },
  { alias: "M. VALE", role: "CORPORATE IDENTITY", tone: "from-fuchsia-500/20" },
];

export default function Home() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-white/10 bg-black/20 p-6 lg:min-h-screen lg:border-b-0 lg:border-r">
        <div className="text-xl font-black tracking-[.28em] text-violet-200">PARALLEL</div>
        <p className="mt-1 text-[10px] tracking-[.3em] text-white/35">VESPER NETWORK // 2089</p>
        <nav className="mt-12 flex gap-5 overflow-x-auto text-sm text-white/55 lg:flex-col">
          {["Overview", "The World", "Social", "Identities", "Family", "Archive"].map((item, index) => (
            <a key={item} href="#" className={index === 0 ? "whitespace-nowrap text-violet-200" : "whitespace-nowrap transition hover:text-white"}>{item}</a>
          ))}
        </nav>
        <div className="mt-16 hidden rounded-xl border border-white/10 bg-white/[.03] p-4 lg:block">
          <div className="text-[10px] tracking-[.2em] text-white/35">PLAYER CONNECTION</div>
          <div className="mt-3 flex items-center gap-2 text-sm"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" /> Local session</div>
          <div className="mt-1 text-xs text-white/35">Foundation build</div>
        </div>
      </aside>
      <section className="mx-auto w-full max-w-7xl p-6 sm:p-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div><p className="text-xs tracking-[.25em] text-violet-300/70">CITY FEED / PERSONAL CONSOLE</p><h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Good evening, <span className="text-violet-200">traveler.</span></h1></div>
          <span className="rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs tracking-widest text-cyan-200">SYSTEM ONLINE</span>
        </header>
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-950/80 via-[#171329] to-[#0b1825] p-8 sm:p-12">
          <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border border-violet-300/10 shadow-[0_0_100px_rgba(139,92,246,.2)]" />
          <div className="absolute -right-2 -top-14 h-52 w-52 rounded-full border border-cyan-200/10" />
          <p className="relative text-xs tracking-[.35em] text-cyan-200/70">WELCOME TO VESPER</p>
          <h2 className="relative mt-5 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">One city.<br /><span className="text-violet-200">Many lives.</span></h2>
          <p className="relative mt-5 max-w-lg text-sm leading-7 text-white/55">Every identity opens a different door. Every choice leaves a trace. And the city never truly sleeps.</p>
          <button className="relative mt-8 rounded-lg border border-violet-200/40 bg-violet-300/10 px-5 py-3 text-sm text-violet-100 transition hover:bg-violet-300/20">Explore the foundation <span aria-hidden>↗</span></button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{metrics.map((metric) => <article key={metric.label} className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><p className="text-[10px] tracking-[.2em] text-white/40">{metric.label}</p><p className="mt-3 text-2xl font-semibold">{metric.value}</p><p className="mt-1 text-xs text-white/35">{metric.detail}</p></article>)}</div>
        <div className="mt-12 flex items-end justify-between gap-4"><div><p className="text-[10px] tracking-[.25em] text-violet-300/60">YOUR OTHER SELVES</p><h3 className="mt-2 text-2xl font-semibold">Identity registry</h3></div><span className="text-xs text-white/35">Concept preview</span></div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{identities.map((identity, index) => <article key={identity.alias} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${identity.tone} to-white/[.02] p-5`}><div className="flex items-center justify-between"><span className="text-[10px] tracking-[.2em] text-white/45">IDENTITY 0{index + 1}</span><span className="h-2 w-2 rounded-full bg-violet-300" /></div><h4 className="mt-8 text-2xl font-black tracking-widest">{identity.alias}</h4><p className="mt-2 text-[10px] tracking-[.2em] text-white/45">{identity.role}</p></article>)}</div>
        <footer className="mt-14 border-t border-white/10 pt-5 text-xs text-white/25">PARALLEL FOUNDATION // VESPER 2089 // BUILD 0.1.0</footer>
      </section>
    </main>
  );
}
