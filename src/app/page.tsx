export default function Home() {
  return (
    <div className="container-page">
      {/* Hero */}
      <section className="pt-16 pb-12 text-center">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest mb-8 animate-fade-in"
          style={{ backgroundColor: "var(--accent-light)", color: "var(--bg-primary)" }}
        >
          ???? ? ???? ? ????
        </div>

        <h1
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <span style={{ color: "var(--accent)" }}>??</span>
          <span className="mx-3" style={{ color: "var(--text-secondary)" }}>?</span>
          <span style={{ color: "var(--text-primary)" }}>??</span>
          <span className="mx-3" style={{ color: "var(--text-secondary)" }}>?</span>
          <span style={{ color: "var(--accent)" }}>??</span>
        </h1>

        <p
          className="mt-6 text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          ??????????????
          <br />
          ???????????????????
        </p>

        <div
          className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          <a
            href="/blog"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff",
            }}
          >
            ???? ?
          </a>
          <a
            href="/tools"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            ????
          </a>
        </div>
      </section>

      {/* ???? */}
      <section className="py-12 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: "?",
            title: "????",
            desc: "?????????????????????????????",
            accent: "var(--accent)",
          },
          {
            icon: "??",
            title: "????",
            desc: "??????????????????????????",
            accent: "var(--accent)",
          },
          {
            icon: "??",
            title: "????",
            desc: "???????????????????????",
            accent: "var(--accent)",
          },
        ].map((card, i) => (
          <div
            key={card.title}
            className="card-warm animate-fade-up group"
            style={{
              animationDelay: `${0.4 + i * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              {card.icon}
            </div>
            <h3
              className="text-lg font-serif font-semibold mb-3 transition-colors duration-300"
              style={{ color: "var(--text-primary)" }}
            >
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </section>

      {/* ???? */}
      <section className="py-12 text-center">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }} />
          <span className="text-xs tracking-widest" style={{ color: "var(--text-secondary)" }}>????</span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--border), transparent)" }} />
        </div>
        <div className="py-12">
          <div className="text-4xl mb-4" style={{ color: "var(--accent)" }}>?</div>
          <p style={{ color: "var(--text-secondary)" }}>?????????????...</p>
        </div>
      </section>
    </div>
  );
}
