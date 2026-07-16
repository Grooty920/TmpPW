export default function Footer() {
  const socialLinks = [
    { href: "https://github.com/Grooty920", label: "GitHub", icon: "GH" },
    { href: "mailto:hello@lovealwayshere.cc", label: "Email", icon: "@" },
  ];

  return (
    <footer
      className="border-t py-12 mt-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="/"
              className="text-lg font-serif font-bold tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              ? LoveAlwaysHere
            </a>
            <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
              ?? ? ?? ? ??
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-all duration-300 hover:scale-110"
                style={{ color: "var(--text-secondary)" }}
                aria-label={link.label}
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center border text-xs font-mono"
                  style={{ borderColor: "var(--border)" }}>
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>? 2026 LoveAlwaysHere. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
