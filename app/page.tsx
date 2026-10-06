import { tools, type Tool } from "./tools";

function ToolIcon({ name }: { name: Tool["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "network") {
    return (
      <svg {...common}>
        <circle cx="12" cy="5" r="2.2" />
        <circle cx="5" cy="18" r="2.2" />
        <circle cx="19" cy="18" r="2.2" />
        <circle cx="12" cy="12.5" r="1.6" />
        <path d="M12 7.2v3.7M10.7 13.5 6.6 16.4M13.3 13.5l4.1 2.9" />
      </svg>
    );
  }
  if (name === "document") {
    return (
      <svg {...common}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 13.5h3M8 16.5h6M16.5 13.5h.01" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="eyebrow">TRUST Jakarta · KPSP</span>
        <h1 className="title">SENTINEL</h1>
        <p className="subtitle">
          Ekosistem pengolahan dan analisis data pengawasan — transaksi,
          dokumen, dan sanction list dalam satu pintu.
        </p>
      </header>

      <section className="grid" aria-label="Daftar tools SENTINEL">
        {tools.map((tool) => (
          <a
            key={tool.id}
            className="card"
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cardTop">
              <span className="iconWrap">
                <ToolIcon name={tool.icon} />
              </span>
              <span className="platform">{tool.platform}</span>
            </div>

            <h2 className="cardTitle">{tool.title}</h2>
            <p className="cardDesc">{tool.description}</p>

            <ul className="chips">
              {tool.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <span className="cta">
              Buka tools
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </a>
        ))}
      </section>

      <footer className="footer">
        Tim PUNGGAWA · Bank Indonesia Jakarta
      </footer>
    </main>
  );
}
